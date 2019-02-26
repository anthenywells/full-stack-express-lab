"use strict";

const express = require("express");
const cartitems = express.Router();
const cartList = [
  {id:0,product:"hat",price:4,quantity:1},
  {id:1,product:"bat",price:5,quantity:1},
  {id:2,product:"cat",price:10,quantity:1},
  {id:3,product:"rat",price:2,quantity:1}
]

cartitems.get("/cartitems", function(req, res){
  res.send(cartList);
});
cartitems.post("/cartitems", function(req, res){
  cartList.push(req.body);
  res.send(cartList);
});
cartitems.put("/cartitems/:id", function(req, res) {
  for(let i = 0; i < cartList.length; i++) {
    if(cartList[i].id == req.params.id) {
      cartList.splice(i, 1, req.body);
      res.send(cartList);
      break;
    }
  }
});
cartitems.delete("/cartitems/:id", function(req, res){
  for(let i = 0; i < cartList.length; i++) {
    if(cartList[i].id == req.params.id) {
      cartList.splice(i, 1);
      res.send(cartList);
      break;
    }
  }
});
module.exports = cartitems;