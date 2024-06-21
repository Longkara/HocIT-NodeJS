const express = require("express");
const {
  getHomePage,
  getProduct,
  getSample,
} = require("../controllers/home.Controller");
const router = express.Router();

// Khai báo route
// router.method('./route', handle)
router.get("/", getHomePage); // Định nghĩa route GET cho trang chủ
router.get("/product", getProduct); // Định nghĩa route GET cho trang sản phẩm
router.get("/LongHocIT", getSample); // Định nghĩa route GET để render file sample.ejs

module.exports = router; // Export router để sử dụng trong các file khác
