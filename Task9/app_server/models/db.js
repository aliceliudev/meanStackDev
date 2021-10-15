const mongoose = require ('mongoose');
const dbURI = 'mongodb+srv://admin:admin@inclasstasks.ofutk.mongodb.net/FoodDB?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log (`Mongoose disconnected through ${msg}`);
    } );
};
//nodemon change
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', ()  => { 
        process.kill(process.pid, 'SIGUSR2');
    });
});
// app termination
process.on('SIGINT', () => { 
    gracefulShutdown('app termination', () => { 
    process.exit(0); 
    });
 });
//Heroku termination
 process.on('SIGTERM', () => { 
    gracefulShutdown('Heroku app shutdown', () => { 
    process.exit(0); 
    });
 });

 require('./food'); // includes the schema js file