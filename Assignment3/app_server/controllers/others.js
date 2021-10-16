// About Page Controller
const about = function(req, res, next) {
    res.render('about', {      
       pageHeader: {
           title: 'About US Page'
       },
       roadMap: {
           imgName:'images/p10.png'
       },
       desc1: {
           text:'dard dummy text ever since the 1500s,when an unknown printer to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingdard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
       },
       contactDetails: {
            address: 'Toronto, Ontario',
            phone: '(555)-555-5555',
            email: 'loc8r@something.com',            
            },                    
      })
};

// Contact Page Controller
const contact = function(req, res, next) {
    res.render('about', { 
        pageHeader:{
            title: 'Contact Us Page' 
        },
        viewDetails:
            "Loc8r was created to help people find places to sit down and get a bit of work done. ",        
        });
};

module.exports = {
    about, contact
}