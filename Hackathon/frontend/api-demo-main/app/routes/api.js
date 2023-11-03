var express = require("express");
var path = require("path");
var router = express.Router();
var controllerDir = "../controllers";
var Users = require(path.join(controllerDir, "users"));

/*Access only if logged in with session */
router.get("/user/:id", async (req, res, next) => {
    var user = await Users.get({ id: req.params.id })
    res.end(JSON.stringify({ user: user }));
});

module.exports = router;
