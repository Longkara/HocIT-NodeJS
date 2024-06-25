require("dotenv").config();
const { fileLoader } = require("ejs");
const express = require("express");
const { hostname } = require("os");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");
const connection = require("./config/database");

// console.log(">>check env:", process.env);
const app = express(); // Tạo ứng dụng express
const port = process.env.PORT || 8081; // Đặt cổng
const hostName = process.env.HOSTNAME;

//config req.body (làm form)
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
// config static File
configViewEngine(app);

// // A simple SELECT query
// connection.query("select * from Users ", function (err, results, fields) {
//   console.log(">>>>Results= ", results);
//   // console.log(">>>>Fields=", fields);
// });

// Khai báo route
app.use("/", webRoute);

app.listen(port, hostName, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});
