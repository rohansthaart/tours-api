
const multer = require("multer");

const Tour = require('../models/Tours')



const getAllTours = async (req, res) => {
    const tours = await Tour.find().select('destination overview.details image');

    const modifiedTours = tours.map(tour => ({
        destination: tour.destination,
        overview: {
            details: tour.overview.details.slice(0, 100)
        },
        image: tour.image.length > 0 ? tour.image[0] : null
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