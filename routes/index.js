var express = require("express");
var router = express.Router();
var user = require("../Controller/userController");

router.get("/", user.index);

router.get("/register", user.register);
router.post("/register", user.register_Account);

router.get("/delete/:id", user.delete);

router.get("/login", user.login_page);
router.post("/login", user.login);

router.get("/Add_Contact", user.Add_Contact);
router.post("/Add_Contact", user.Insert_Contact);

router.get("/View_Contact", user.View_Contact);

router.get("/Manage_Account", user.Manage_Account);
router.post("/Manage_Account", user.Update_Account);

router.get("/Delete_Contact/:id", user.Delete_Contact);

router.get("/Manage_Contact/:id", user.Manage_Contact);
router.post("/Manage_Contact/:id", user.Update_Contact);

router.get("/logout", user.logout);

module.exports = router;
