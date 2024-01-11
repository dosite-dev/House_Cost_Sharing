const express = require('express');
const houseRouter = express.Router();
const {create} = require ('../controllers/house.controller');


houseRouter.post('/add', create);

module.exports = houseRouter;