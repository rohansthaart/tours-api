
const multer = require("multer");

const Tour = require('../models/Tours')



const getAllTours = async (req, res) => {
    const tours = await Tour.find().select('_id destination overview.details image category subCategory');

    const modifiedTours = tours.map(tour => ({
        destination: tour.destination,
        _id: tour._id,
        overview: {
            details: tour.overview.details.slice(0, 100)
        },
        category: tour.category,
        subCategory: tour.subCategory,
        image: tour.image.length > 0 ? [tour.image[0]] : null
    }));

    res.status(200).json(modifiedTours);
}
const getTour = async(req,res) =>{
    const {params:{id}} = req
    const tour = await Tour.findById(id)
       if(!tour) return res.status(404).send(`No tour with id ${id}`)
       res.status(200).json(tour)
}

const createTour =  async(req,res)=>{
    const {destination, transportation, groupSize,maxAttitude,bestSeason,category,subCategory,permits,difficulty,image,overview,itenerary,included,notIncluded} = req.body;
   
    const tour = await Tour.create({...req.body})
    res.status(201).json(tour)
}

module.exports = {
    getAllTours,
    getTour,
    createTour

}