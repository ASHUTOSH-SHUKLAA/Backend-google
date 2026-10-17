function overview(req, res) {
  return res.json({
    message: "Administrator access verified by the API.",
    access: "admin",
    uid: req.authUser.uid,
  });
}

module.exports = { overview };
