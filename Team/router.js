const express = require("express");
const Team = require("./model");
const { Router } = express;

const router = new Router();

router.get(
  "/Team", // list of all Team (REST)
  async (request, response, next) => {
    try {
      const teams = await Team.findAll();
      response.send(teams);
      console.log("done");
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

//     Team.findAll().then(teams => {
//       response.send(teams);
//     });
