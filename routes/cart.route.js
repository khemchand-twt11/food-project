const express = require("express");
const { menuModel } = require("../models/menu.model");
const { cartModel } = require("../models/cart.model");
const cartRoute = express.Router();

cartRoute.post("/", async (req, res) => {
  try {
    const { menuId, userId } = req.body;
    const findCart = await cartModel.findOne({
      userId: userId,
      menuId: menuId,
    });
    if (findCart) {
      res.status(200).send({ msg: "product Already in Cart!" });
    } else {
      const menuItem = await menuModel.findById(menuId);
      console.log("menuItem", menuItem);
      const cartItem = new cartModel({
        menuId,
        userId,
        img: menuItem.img,
        title: menuItem.title,
        description: menuItem.description,
        label: menuItem.label,
        cost: menuItem.cost,
        type: menuItem.type,
        food_type: menuItem.food_type,
      });
      await cartItem.save();
      console.log(cartItem);
      res.status(200).send({ msg: "Product Added to the Cart!" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});
module.exports = { cartRoute };
