const index =  function(req, res, next) {
    res.render('index', { title: 'Alice Liu' });
  };

 module.exports = {
     index
 }; 
