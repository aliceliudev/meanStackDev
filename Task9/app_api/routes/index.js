var express = require('express');
var router = express.Router();
const ctrlFood = require('../controllers/food');

router
  .route('/foods')
  .get(ctrlFood.getFoods)
  .post(ctrlFood.createFood);

router
   .route('/foods/:foodid') 
   .get(ctrlFood.getSingleFood)
   .put(ctrlFood.updateFood)
   .delete(ctrlFood.deleteFood);

module.exports = router;