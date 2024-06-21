require("dotenv").config();
const { fileLoader } = require("ejs");
const express = require("express");
const { hostname } = require("os");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");
const mysql = require("mysql2");

// console.log(">>check env:", process.env);
const app = express(); // Tạo ứng dụng express
const port = process.env.PORT || 8081; // Đặt cổng
const hostName = process.env.HOSTNAME;

// config template engine
// config static File
configViewEngine(app);

// Khai báo route
app.use("/api", webRoute);

//create the connection
const connection = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "root", //default password: empty
  password: "123456",
  database: "hoidanit",
});

// A simple SELECT query
connection.query("select * from Users ", function (err, results, fields) {
  console.log(">>>>Results= ", results);
  console.log(">>>>Fields=", fields);
});
app.listen(port, hostName, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});
