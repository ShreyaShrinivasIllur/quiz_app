import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    category : { type : String, default : 'current-affairs'},
    categoryName : { type : String, default : 'Current Affairs & General Knowledge'},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('result', resultModel);