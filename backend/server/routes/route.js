const express = require("express");
const route = express.Router();
const { Home, Singup } = require("./api");

route.get("/", Home);
route.post("/singup/user", Singup);

module.exports = route;
