var user = require("../Model/userModel");
var Contact = require("../Model/userModel2");
const storage = require("node-persist");
storage.init();

exports.index = async (req, res) => {
    

    var user_id = await storage.getItem("user_id");
    if (user_id == undefined) {
      res.redirect("/login");
    }
    var data = await user.findById(user_id);
    if (!data) {
      return res.render("index", { data: {} });
  }

    res.render("index", { data });
};

exports.register = async (req, res) => {
  res.render("register");
};

exports.register_Account = (req, res) => {
  user.create(req.body);
  res.redirect("/");
};

exports.delete = async (req, res) => {
  var id = req.params.id;
  await user.findByIdAndDelete(id);
  res.redirect("/");
};

exports.login_page = async (req, res) => {
  var user_id = await storage.getItem("user_id");
  if (user_id != undefined) {
    res.redirect("/");
  }
  res.render("login");
};

exports.login = async (req, res) => {
  var data = await user.find({ email: req.body.email });
  if (data.length != 0) {
    if (data[0].password == req.body.password) {
      await storage.setItem("user_id", data[0].id);
      res.redirect("/");
    } else {
      res.redirect("login");
    }
  } else {
    res.redirect("login");
  }
};

exports.Add_Contact = async (req, res) => {
  var user_id = await storage.getItem("user_id");
  var data = await Contact.find(u_id={user_id});
  res.render("Add_Contact");
};

exports.Insert_Contact = async (req, res) => {
  var user_id = await storage.getItem("user_id");
  req.body.u_id=user_id;
  Contact.create(req.body);
  res.redirect("/View_Contact");
};

exports.View_Contact = async (req, res) => {
  var pageNo = 1;
  var user_id = await storage.getItem("user_id");
  var data = await Contact.find({"u_id":user_id});
  
  res.render("View_Contact", { data });
  
};

exports.Manage_Account = async (req, res) => {
  var user_id = await storage.getItem("user_id");
  var data = await user.findById(user_id);
  res.render("Manage_Account", { data });
};

exports.Update_Account = async (req, res) => {
  var user_id = await storage.getItem("user_id");
  var data = await user.findByIdAndUpdate(user_id, req.body);
  res.redirect("/");
};

exports.Delete_Contact = async (req, res) => {
  var id = req.params.id;
  await Contact.findByIdAndDelete(id);
  res.redirect("/View_Contact");
};

exports.Manage_Contact = async (req, res) => {
    var id = req.params.id;
    var data = await Contact.findById(id);
    res.render("Manage_Contact", { data });
};
exports.Update_Contact = async (req, res) => {
  var id = req.params.id;
  var data = await Contact.findByIdAndUpdate(id, req.body);
  res.redirect("/View_Contact");
};

exports.logout = async (req, res) => {
  await storage.clear();
  res.redirect("/");
};
