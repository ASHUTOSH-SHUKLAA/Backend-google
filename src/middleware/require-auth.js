const { getFirebaseAuth } = require("../config/firebase");
const { verifyAccessToken } = require("../lib/jwt");

function getBearerToken(req) {
  const authorization = req.get("authorization") || "";
  const [scheme, token] = authorization.split(" ");
  return scheme === "Bearer" && token ? token : null;
}

async function requireFirebaseAuth(req, res, next) {
  const token = getBearerToken(req);
  if (!token) return res.status(401).json({ message: "A Firebase sign-in token is required." });

  try {
    // Signature, issuer, audience, and expiry are checked by the Firebase Admin SDK.
    req.firebaseUser = await getFirebaseAuth().verifyIdToken(token);
    return next();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error("Firebase sign-in token verification failed:", error.message);
    return res.status(401).json({ message: "Your Google sign-in session is invalid or expired. Please sign in again." });
  }
}

function requireAuth(req, res, next) {
  const token = getBearerToken(req);
  if (!token) return res.status(401).json({ message: "A JWT access token is required." });

  try {
    req.authUser = verifyAccessToken(token);
    return next();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error("JWT access token verification failed:", error.message);
    return res.status(401).json({ message: "Your access token is invalid or expired. Sign in again." });
  }
}

function requireAdmin(req, res, next) {
  if (req.authUser?.role !== "admin") {
    return res.status(403).json({ message: "Administrator access is required." });
  }
  return next();
}

module.exports = { requireFirebaseAuth, requireAuth, requireAdmin };
