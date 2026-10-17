const express = require("express");
const { issueToken, currentProfile } = require("../controllers/auth-controller");
const { requireFirebaseAuth, requireAuth } = require("../middleware/require-auth");

const router = express.Router();
router.post("/token", requireFirebaseAuth, issueToken);
router.get("/me", requireAuth, currentProfile);

module.exports = router;
