const express = require("express");
const Team = require("./model");
const { Router } = express;

const router = new Router();

router.get(
  "/Team", // list of all Team (REST)
  async function(request, response, next) {
    try {
      const teams = await Team.findAll();
      response.send(teams);
      console.log("done");
    } catch (error) {
      next(error);
    }
  }
);

router.post("/Team", async function(request, response, next) {
  try {
    const team = await Team.create(request.body);

    response.send(team);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

//     Team.findAll().then(teams => {
//       response.send(teams);
//     });
