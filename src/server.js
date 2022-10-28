// load values from .env into process.env
require("dotenv").config();



const express = require("express");
const db = require("./db");

const app = express();

app.get("/tagged/:paymentId", function (request, response) {

});
