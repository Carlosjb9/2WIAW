var express = require("express");
var path = require("path");
var router = express.Router();
var controllerDir = "../controllers";
var skins = require(path.join(controllerDir, "skins"));

router.get("/skins/avaible", (req, res) => {
  res.
});
// Post para la skin
router.post("/skins/buy", async (req, res, next) => {
  req.session.auth = await skins.buy({
    skin: req.body.skin,
    user: req.body.user,
  });
});

router.get("/add", async (req, res) => {
  let result = await skins.put({ skin: req.body.skin, pass: req.body.pass });
  res.redirect("/new");
});
router.post("/list", async (req, res, next) => {
  let result = await skins.get();
  res.redirect("/list", { skins: result });
});
module.exports = router;
