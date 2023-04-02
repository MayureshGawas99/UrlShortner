const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req,res) => {
  const htmlPath = path.join(__dirname,"public","index.html");
  // console.log("__direname:",__dirname,htmlPath);
  res.send(htmlPath);
})

module.exports = router;