const express = require("express");
const { hostname } = require("os");
const path = require("path"); // Đảm bảo rằng module path được import
require("dotenv").config();

console.log(">>check env:", process.env);
const app = express(); // Tạo ứng dụng express
const port = process.env.PORT || 8081; // Đặt cổng
const hostName = process.env.HOSTNAME;

// Cấu hình template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Chỉ định view engine là ejs

// Khai báo route
app.get("/LongHocIT", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostName, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});
