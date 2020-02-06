const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const teams = require("./Team/model");
console.log("I WANT TO SEE", teams);

const db = require("./db");
console.log("SEE THIS", db);

// app.use("/Team", teams);
// app.use("/db", db);

app.listen(port, () => console.log(`Listening on: ${port}`));
