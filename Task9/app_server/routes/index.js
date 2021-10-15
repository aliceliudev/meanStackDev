var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main')
const ctrlFood = require('../controllers/food')
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/foodlist', ctrlFood.foodlist);
// router.get('/favourite', ctrlFood.favouriteFood);
// router.get('/foods', ctrlFood.foodlist);
router.get('/foods/:foodid', ctrlFood.foodInfo);
router.route('/new')
      .get(ctrlFood.addNewFood)
      .post(ctrlFood.doAddNewFood);
module.exports = router;
