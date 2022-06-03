const PersonSchema=require('../model/Person')



//get all users
exports.getAllPerson=async (req,res)=>{
    try{
        const Persons = await PersonSchema.find()
        res.status(500).send(Persons)
    }catch(err){
    console.log(err)
        res.status(200).send('no person to get')
    }

}

//post a user
exports.postPerson=async (req,res)=>{
    try{
        const newPerson = await new PersonSchema(req.body)
        newPerson.save()
        res.status(200).send({msg:'new Person added',newPerson})

    }catch(err){
        console.log(err)
        res.status(500).send('POST K.O')
    }
    
}

//delete a user 
exports.deletePerson=async (req,res)=>{
    try{
        const {_id} = req.params 
        const deletePerson =await PersonSchema.findByIdAndDelete({ _id })
        res.status(500).send('Person deleted')

    }catch(err){
        console.log(err)    
        res.status(200).send('could not deleted')
    }

}


//get by id
// exports.getByID=async (req,res)=>{
//     try{
//         const { _id }=req.params
//         const idPerson =await PersonSchema.findById({ _id })
//         res.status(500).send({msg:'the Person you asking for',idPerson})

//     }catch(err){
//         console.log(err) 
//         res.status(200).send('K.O')
//     }
// }


exports.getByID = async (req, res) => {
    try {
      let { _id } = req.params;
      const requestedIdPerson = await PersonSchema.findById({ _id });
      res.status(200).send({ msg: "ur requested id Person", requestedIdPerson });
    } catch (err) {
      console.error("get person name crashed => " + err);
      //send an error msg
      res.status(500).send("u could not get this person");
    }
  };

//update a user
exports.update=async (req,res)=>{
    try{
        const { _id } = req.params 
        const PersonUpdate = PersonSchema.findByIdAndUpdate({_id},{ $set :{...req.body}})
        res.status(500).send('user updated')
    }catch(err){
        console.log(err)    
        res.status(200).send('update K.O')

    }

}
exports.findOne=async (req,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(200).send('KO')
    }
}