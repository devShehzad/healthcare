const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create ninja schema & models
const NinjaSchema = new Schema({

    name: {
        type:String,
        required:[true, 'name field is required'],
    },
    rank: {
        type:String
    },
    avaliable: {
        type:Boolean,
        default:false
    }
});
const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;
