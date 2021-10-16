const index = function(req, res, next) {
  res.render('index',{ 
    pageHeader: {
      title:`Alice's bookstore`,
      desc1: 'dard dummy text ever since the 1500s,when an unknown printer to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingdard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
    }
  
  
  });
}

module.exports = {
    index
};