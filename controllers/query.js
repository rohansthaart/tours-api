const Query = require('../models/Query')



const getAllQuery = async (req,res)=>{
    const query = await Query.find()
    res.status(200).json(query)
}


const createQuery =  async(req,res)=>{
  
   
    const query = await Query.create({...req.body})
    res.status(201).json(query)
}
const deleteQuery = async(req,res)=>{
    const delQuery = await Query.findByIdAndDelete(req.params.id);
    res.status(201).send(delQuery)
}
module.exports = {
    getAllQuery,
    createQuery,
    deleteQuery

}