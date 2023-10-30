var express = require("express");
var path = require("path");
var router = express.Router();
var controllerDir = "../controllers";
var Skins = require(path.join(controllerDir, "skins"));

/*Access only if logged in with session */
router.get("/skin/:id", async (req, res, next) => {
  var skin = await skins.get({ id: req.params.id });
  res.end(JSON.stringify({ skin: skin }));
});

module.exports = router;
