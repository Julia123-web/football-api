const express = require("express");
const Player = require("./model");
const Team = require("../Team/model");
const { Router } = express;
const router = new Router();

router.get("/player", async function(request, response, next) {
  try {
    const player = await Player.findAll();

    response.send(player);
  } catch (error) {
    next(error);
  }
});

router.get("/player/:id", async (request, response, next) => {
  try {
    const player = await Player.findByPk(request.params.id, {
      include: [Team]
    });
    response.send(player);
  } catch (error) {
    next(error);
  }
});

router.post("/player", async function(request, response, next) {
  try {
    const player = await Player.create(request.body);
    response.send(player);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
