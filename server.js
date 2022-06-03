const express=require('express')
const connectDB = require('./config/connectDB')
const PersonRouter = require('./routes/Person')
require('dotenv').config()
const App=express()

const port=process.env.port
 
connectDB()
App.use(express.json())
App.use('/api/Person',PersonRouter)


App.listen(port,err=>{
    err?console.log(err):console.log(`go to the port:${process.env.port}`)
})