const express = require("express");
const { menuModel } = require("../models/menu.model");
const menuRoute = express.Router();

menuRoute.get("/", async (req, res) => {
  let menu = await menuModel.find();
  res.send({ msg: "successfull!", data: menu });
});

module.exports = { menuRoute };
