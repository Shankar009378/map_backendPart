const express = require('express');
const router = express.Router();
const Route = require('../models/Route');

router.post('/routes', async (req, res) => {
  try {
    const { origin, destination, waypoints } = req.body;
    const newRoute = new Route({ origin, destination, waypoints });
    await newRoute.save();
    res.status(201).send(newRoute);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
