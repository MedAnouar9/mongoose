const mongoose=require('mongoose')

const PersonSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    favoriteFood:String
}) 
module.exports =mongoose.model('Person',PersonSchema)