const express = require("express");
const unAuthenticatedRoutes = require("./routes/unauthenticated");

//const http = require('http');
const app = express();

app.use(express.json());

app.use("/", unAuthenticatedRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3002, () => {
  console.log("App is listening on port 3002.");
});
