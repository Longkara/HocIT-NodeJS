const getHomePage = (req, res) => {
  res.send("Hello World!");
};
const getProduct = (req, res) => {
  res.send("Product");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
module.exports = { getHomePage, getProduct, getSample };
