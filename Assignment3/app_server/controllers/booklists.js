const request = require('request');
const apiOptions = {server: 'http://localhost:3000'};
const _renderHomepage = function(req, res, responseBody) {
  let message = null;
  if(!(responseBody instanceof Array)) {
    message = "API loop error.";
    responseBody = [];
  }
  else {
    if(!responseBody.length) {
      message = "No book is found.";
    }
  }
  res.render('list-display', { 
    books: responseBody, 
    message: message
  }); 
};

const bookList = function(req, res){
  const path = '/api/list';
  const requestOptions = {
    url: apiOptions.server + path, 
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderHomepage(req, res, body);
    }
  );
};

const _renderDetailPage = function (req, res, responseBody){
   res.render('book-info', {
      books:responseBody     
   });
   console.log("xxxxxxxxxxxxxxx", res);
};
const bookInfo = function(req, res){
  const path = `/api/list/${req.params.bookid}`;
  console.log("xxxxxxxxxxxxxxxxxxxxxx", path);
  const requestOptions = {
    url: apiOptions.server + path, 
    method: 'GET',
    json:{}
  };
  console.log("oooooo", requestOptions);
  request(
    requestOptions,
    (err, response, body) => {
      console.log("aaaaaaaaaaaaaaaaaaaaa",err, response, body);
        _renderDetailPage(req, res, body);
    }
  );
};

const _renderCreatePage = function(req, res){
  res.render('creater-new-book', {
    title: "Create a new book"
  });
};

const addNewBook = function(req, res){
  _renderCreatePage(req, res);
};

const doAddNewBook = function(req, res) {
  const path = '/api/list';
  const postdata = {
    name: req.body.name, 
    imgName: req.body.imgName,
    author: req.body.author,
    price: req.body.price,
    bookStatus: [{
            stat: req.body.stat1,
            rating: req.body.rating1,
            discount: req.body.discount1,
            bookform: req.body.bookform1
    },
    {
      stat: req.body.stat2,
      rating: req.body.rating2,
      discount: req.body.discount2,
      bookform: req.body.bookform2
}

  ]


  };
  const requestOptions= {
    url: apiOptions.server + path, 
    method: 'POST',
    json:postdata
  };
  console.log("xxxxxxxxxxxxxxxxxxx",postdata);
  request(
    requestOptions,
    (err, response, body) => {
      console.log("00000000000000000000000",err, response, body);
      if(response.statusCode ===201) {
         res.redirect('/list');
      }
    }
  );
};


 module.exports = {
     bookList,
     bookInfo,
     doAddNewBook,
     addNewBook
 }; 

