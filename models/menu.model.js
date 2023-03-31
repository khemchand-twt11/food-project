const mongoose = require("mongoose");

const menuScheme = mongoose.Schema(
  {
    img: String,
    title: String,
    description: String,
    label: String,
    cost: Number,
    type: String,
    food_type: String,
  },
  {
    versionKey: false,
  }
);

const menuModel = mongoose.model("menu", menuScheme);
module.exports = { menuModel };

/*


img
"https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20221128…"
title
"Veg Whopper"
description
"Our signature Whopper with 7 layers between the buns. Extra crunchy ve…"
label
"https://www.burgerking.in/static/media/veg.2d5a7ccc.svg"
cost
169
type
"whopper"
food_type
"veg"
*/
