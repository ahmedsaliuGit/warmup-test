const express = require("express");
var cors = require("cors");

const app = express();

// use it before all route definitions
app.use(cors({ origin: "http://localhost:8000" }));

app.get("/", (req, res) => {
  res.send("Hey, I'm a Node.js app!");
});

app.post("/", (req, res) => {
  res.send([
    { name: "Ahmed", phone: 2347037819170 },
    { name: "Abiodun", phone: 2347037613870 },
    { name: "John", phone: 2347037819170 },
  ]);
});

app.listen(8081, () => {
  console.log("Server is up on 8081");
});
