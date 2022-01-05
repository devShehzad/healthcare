const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
// setting up express
const app = express();

// connection mongodb server 
mongoose.connect('mongodb+srv://healthcare:admin321@test.sqki8.mongodb.net/healthcare?retryWrites=true&w=majority',{ useNewUrlParser: true });;
// connection for local storage
// mongoose.connect('mongodb://localhost/ninjago',{ useNewUrlParser: true });;
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(402).send({
        error:err.message
    })
})

var PORT = process.env.port || 3000
//listen for request
app.listen(PORT, ()=>{
        console.log("now listening for requests")

});