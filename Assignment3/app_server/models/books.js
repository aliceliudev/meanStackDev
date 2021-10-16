const mongoose = require('mongoose');
const bookStatusSchema = new mongoose.Schema({
    stat: {
        type: String,
        minlength:3,
        'default': "On sale" 
    },
    rating: {
        type: Number,
        'default': 3,
        required: true,
        min: 1,
        max: 5
    },
    discount: {
        type: String,
        minlength:3,
        'default': "20%" 
    },
    bookform: {
        type: String,
        minlength:3, 
        'default': "hardcover"
    }
});

const bookSchema = new mongoose.Schema(
    {
        imgName: {
            type: String,
            required: true,
            minlength:3          
        },
        
        name: {
            type: String,
            required: true,
            minlength:3
        },

        author: {
            type: String,
            required: true,
            minlength:2 
        },

        price: {
            type: String,
            required: true,
            minlength:3 
        },
        
        bookStatus: [bookStatusSchema]
    }
);

mongoose.model('Book', bookSchema, 'books'); 
