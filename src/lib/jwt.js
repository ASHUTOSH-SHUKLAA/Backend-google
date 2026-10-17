const crypto = require("node:crypto");

const ISSUER = "morrow-studio-api";
const AUDIENCE = "morrow-studio-web";
const DEFAULT_TTL_SECONDS = 15 * 60;

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret || Buffer.byteLength(secret, "utf8") < 32) {
    throw new Error("JWT_SECRET must be set to a random value of at least 32 bytes.");
  }
  return secret;
}

function getTtlSeconds() {
  const ttl = Number(process.env.JWT_TTL_SECONDS || DEFAULT_TTL_SECONDS);
  if (!Number.isInteger(ttl) || ttl < 60 || ttl > 24 * 60 * 60) {
    throw new Error("JWT_TTL_SECONDS must be an integer between 60 and 86400.");
  }
  return ttl;
}

function encode(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function signAccessToken(firebaseUser) {
  const now = Math.floor(Date.now() / 1000);
  const ttl = getTtlSeconds();
  const header = { alg: "HS256", typ: "JWT" };
  const payload = {
    iss: ISSUER,
    aud: AUDIENCE,
    sub: firebaseUser.uid,
    uid: firebaseUser.uid,
    email: firebaseUser.email || null,
    name: firebaseUser.name || null,
    picture: firebaseUser.picture || null,
    role: firebaseUser.role === "admin" ? "admin" : "user",
    iat: now,
    exp: now + ttl,
  };
  const signingInput = `${encode(header)}.${encode(payload)}`;
  const signature = crypto.createHmac("sha256", getSecret()).update(signingInput).digest("base64url");
  return { accessToken: `${signingInput}.${signature}`, expiresIn: ttl, user: payload };
}

function verifyAccessToken(token) {
  if (typeof token !== "string" || token.length > 8192) throw new Error("Invalid access token.");
  const parts = token.split(".");
  if (parts.length !== 3 || parts.some((part) => !part)) throw new Error("Invalid access token.");

  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  const signingInput = `${encodedHeader}.${encodedPayload}`;
  const expected = crypto.createHmac("sha256", getSecret()).update(signingInput).digest();
  const received = Buffer.from(encodedSignature, "base64url");
  if (received.length !== expected.length || !crypto.timingSafeEqual(received, expected)) {
    throw new Error("Invalid access token signature.");
  }

  const header = JSON.parse(Buffer.from(encodedHeader, "base64url").toString("utf8"));
  const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
  const now = Math.floor(Date.now() / 1000);
  if (header.alg !== "HS256" || header.typ !== "JWT") throw new Error("Unsupported access token.");
  if (payload.iss !== ISSUER || payload.aud !== AUDIENCE) throw new Error("Invalid access token issuer.");
  if (typeof payload.sub !== "string" || !payload.sub || !Number.isInteger(payload.exp) || payload.exp <= now) {
    throw new Error("Expired or invalid access token.");
  }
  if (payload.role !== "admin" && payload.role !== "user") throw new Error("Invalid access token role.");
  return payload;
}

module.exports = { signAccessToken, verifyAccessToken };
