const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", () => {});

app.listen(port, () => console.log(`Listening on: ${port}`));
