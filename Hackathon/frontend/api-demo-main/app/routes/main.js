var express = require("express");
var path = require("path");
var router = express.Router();
var controllerDir = "../controllers";
var Users = require(path.join(controllerDir, "users"));

router.get("/", async (req, res, next) => {
    res.render("login-page");
});
/*Hace login del usuario y redirecciona a la pagina info */
router.post("/login", async (req, res, next) => {
    req.session.auth = await Users.login({ user: req.body.user, pass: req.body.pass })
    res.redirect("/info");
});
router.get('/new', (req, res) => {
    res.render("add-user");
});
router.get('/add', async (req, res) => {
    let result = await Users.put({ user: req.body.user, pass: req.body.pass })
    res.redirect("/new");
});
router.post("/list", async (req, res, next) => {
    let result = await Users.get()
    res.redirect("/list",{ users: result });
});
module.exports = router;
