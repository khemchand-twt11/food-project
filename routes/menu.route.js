const express = require("express");
const { menuModel } = require("../models/menu.model");
const menuRoute = express.Router();

menuRoute.get("/:searchQuery", async (req, res) => {
  try {
    const searchTerm = req.params.searchQuery;

    let menu = await menuModel.find({
      $or: [
        { title: { $regex: new RegExp(searchTerm, "i") } },
        { type: { $regex: new RegExp(searchTerm, "i") } },
      ],
    });
    console.log(menu);
    res.send({ msg: "successfull!", data: menu });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// INDIVIDUAL ITEM
menuRoute.get("/", async (req, res) => {
  try {
    const searchTerm = req.query.item;

    let menu = await menuModel
      .find(searchTerm ? { type: searchTerm } : { type: "deals" })
      .limit(searchTerm ? undefined : 10);
    console.log(menu);
    res.send({ msg: "successfull!", data: menu });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { menuRoute };
