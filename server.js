"use strict";

const express = require("express");
const app = express(); 
const cartitems = require("./routes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cartitems);

app.listen(8888, function() {
  console.log("Server is running");
})
