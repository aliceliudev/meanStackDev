const mongoose = require('mongoose');
const Food = mongoose.model('Food');
var sendJSONResonse = function (res, status, content){
    res.status(status);
    res.json(content);
}

const getFoods = function (req, res){
    Food.find().exec(function(err, fooddata){
        if(err) {
           sendJSONResonse(res, 404, err);
        return;
        }
        else{
            sendJSONResonse(res, 200, fooddata);
        }
    });
    
};
const getSingleFood = function (req, res){
   if(req.params && req.params.foodid) {
     Food
      .findById(req.params.foodid)
      .exec((err, fooddata) => {
          if(!fooddata) {
              sendJSONResonse(res, 404,{"message" : "foodid not found"});
            return;
          } else if(err) {
              sendJSONResonse(res, 404, err);
              return;
          }          
              sendJSONResonse(res, 200, fooddata);         
      });
    } else {
        sendJSONResonse(res, 404, {"message" : "No foodid in request!"});
    }     
};
const updateFood = function (req, res){
    if(!req.params.foodid) {
        sendJSONResonse(res, 404, {"message" : "Not found, foodid is required!"});
        return;
    }
    Food.findById(req.params.foodid)
       .exec((err, fooddata) => {
           if (!fooddata) {
               sendJSONResonse(res, 404, {"message" : "foodid not found!"});
               return;
           } else if (err) {
               sendJSONResonse(res, 400, err);
               return;
           }
           fooddata.name = req.body.name;
           fooddata.type = req.body.type;
           fooddata.imgName = req.body.imgName;
           fooddata.rating = req.body.rating;
           fooddata.save((err, fooddata) => {
               if(err) {
                   sendJSONResonse(res, 404, err);
               } else {
                   sendJSONResonse(res, 200, fooddata);
               }
           });
       });
};
const createFood = function (req, res){
    Food.create({
        name: req.body.name,
        type: req.body.type,
        imgName: req.body.imgName,
        rating: req.body.rating
    }, (err, fooddata) =>{
        if (err) {
            sendJSONResonse(res, 404, err);
        }
        else {
            res
            sendJSONResonse(res, 201, fooddata)
        }    
    });
}
const deleteFood = function (req, res){
    const foodid = req.params.foodid;
    if (foodid) {
        Food
        .findByIdAndRemove(foodid)
        .exec((err, fooddata) => {
            if (err) {
                sendJSONResonse(res, 404, err);
                return;
            }
            sendJSONResonse(res, 204, null);
        });
    } else {
        sendJSONResonse(res, 404, {"message" : "No foodid"});
    }

};

module.exports = {
    getFoods, 
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};