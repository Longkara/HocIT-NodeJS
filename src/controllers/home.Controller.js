const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getProduct = (req, res) => {
  res.send("Product");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  let { email, name, City } = req.body;
  console.log(">>> Email=", email, ">>> Name=", name, ">>> City=", City);
  // res.send("Create User");

  // Using placeholders
  connection.query(
    `INSERT INTO
    Users(email, name, city)
    VALUE(?, ?, ?)`,
    [(email, name, City)],
    function (err, results) {
      console.log(results);
      res.send("create user success !");
    }
  );
};
module.exports = { getHomePage, getProduct, getSample, postCreateUser };
