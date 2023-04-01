const express = require("express");
const { menuModel } = require("../models/menu.model");
const menuRoute = express.Router();

menuRoute.get("/:searchQuery", async (req, res) => {
  try {
    const searchTerm = req.params.searchQuery;
    console.log(searchTerm);
    let menu = await menuModel.find({
      description: { $regex: new RegExp(searchTerm, "i") },
    });
    console.log(menu);
    // let menu = await menuModel.find();
    console.log(menu);
    res.send({ msg: "successfull!", data: menu });
  } catch (error) {
    res.status(400).send({ error });
  }
});

module.exports = { menuRoute };
