const express = require("express");
const app = express();
const methodOverride = require("method-override");
const postsModel = require("./models/posts");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
