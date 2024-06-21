const path = require("path");
const express = require("express");
//app là express
const configViewEngine = (app) => {
  // Cấu hình template engine
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs"); // Chỉ định view engine là ejs
  // config static FileSystem
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine; //export default
