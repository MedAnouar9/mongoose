const mongoose= require('mongoose')

const connectDB =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('you are connected to the DB')
    }catch(err){
        console.log(err)

    }
}
module.exports = connectDB;