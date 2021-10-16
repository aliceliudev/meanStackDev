var express = require('express');
var router = express.Router();
const ctrlBook= require('../controllers/booklists');

router
  .route('/list')
  .get(ctrlBook.getBooks)
  .post(ctrlBook.createBook);

router
   .route('/list/:bookid') 
   .get(ctrlBook.getSingleBook)
   .put(ctrlBook.updateBook)
   .delete(ctrlBook.deleteBook);

module.exports = router;