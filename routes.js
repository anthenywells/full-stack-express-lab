"use strict";

const express = require("express");
const cartitems = express.Router();
const pool = require("./pg-connection-pool")

function selectAll(req,res) {
  pool.query("select * from shoppingcart order by id asc").then((result) => {
      res.send(result.rows)
  })
};
cartitems.get("/cartitems", (req, res) => {
  selectAll(req,res);
});
cartitems.post("/cartitems", (req, res) => {
  pool.query("insert into shoppingcart (product, price, quantity) values ($1::text, $2::real, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function(){
    selectAll(req,res);
  });
});
cartitems.put("/cartitems/:id", (req, res) =>  {
  pool.query("update shoppingcart set quantity=$1::int where id=$2::int", [req.body.quantity, req.params.id]).then(function(){
    selectAll(req,res);
  });
});
cartitems.delete("/cartitems/:id", (req, res) => {
  pool.query("delete from shoppingcart where id=$1::int", [req.params.id]).then(function(){
    selectAll(req,res);
  });
});
module.exports = cartitems;