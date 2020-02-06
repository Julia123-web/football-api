const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const teamRouter = require("./Team/router");

function onListen() {
  console.log(`Listening on :${port}`);
}
const jsonParser = express.json();
app.use(jsonParser);
app.use(teamRouter);

app.listen(port, onListen);

// const teams = require("./Team/model");
// console.log("I WANT TO SEE", teams);

// const db = require("./db");
// console.log("SEE THIS", db);

// app.get("./Team", (request, response) => {
//   console.log("app test");
//   response.send("app");
// });
