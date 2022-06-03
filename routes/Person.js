const express =require('express')
 
const PersonRouter=express.Router()

//const PersonSchema=require('../model/Person')
const {getAllPerson,postPerson,deletePerson,getByID,update}=require('../controllers/Person')
PersonRouter.post('/',postPerson)


PersonRouter.get('/',getAllPerson)


PersonRouter.get('/:_id',getByID)


PersonRouter.delete('/:_id',deletePerson)



PersonRouter.put('/:_id',update)



module.exports=PersonRouter 