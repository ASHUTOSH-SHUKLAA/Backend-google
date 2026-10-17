const { signAccessToken } = require("../lib/jwt");

function issueToken(req, res) {
  try {
    return res.json(signAccessToken(req.firebaseUser));
  } catch (error) {
    console.error("JWT issuance failed:", error.message);
    return res.status(500).json({ message: "The server could not create an access token." });
  }
}

function currentProfile(req, res) {
  const { uid, email, name, picture, role } = req.authUser;
  return res.json({
    uid,
    email: email || null,
    name: name || null,
    picture: picture || null,
    role: role === "admin" ? "admin" : "user",
  });
}

module.exports = { issueToken, currentProfile };
