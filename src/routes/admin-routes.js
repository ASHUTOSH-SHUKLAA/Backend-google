const express = require("express");
const { overview } = require("../controllers/admin-controller");
const { requireAuth, requireAdmin } = require("../middleware/require-auth");

const router = express.Router();
router.get("/overview", requireAuth, requireAdmin, overview);

module.exports = router;
