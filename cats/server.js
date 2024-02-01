// packages
const express = require("express");
const axios = require("axios");
// routers
const catRouter = require("./routers/cats");

// I don't what this is called, maybe initialize app & port
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use("/", catRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});