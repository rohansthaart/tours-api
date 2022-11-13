const mongoose = require('mongoose');

const multer = require('multer')
const TourSchema = new mongoose.Schema({
        destination:{
            type:String,
            required: [true, 'Please provide destination name'],
            maxlength: 100,
        },
        location:{
            type:String,
        },
        transportation:{
            type: String,
            maxlength: 50,
        },
        groupSize:{
            type: String,
            maxlength: 50,
        },
        maxAttitude:{
            type: String,
            maxlength: 50,
        }, 
        bestSeason:{
            type: String,
            maxlength: 50,
        },
        category:{
            type: String,
            enum: ['Nepal','Trekking','Adventure','Wellness and Meditation','Day tours and hikes','Kailash Mansarovar','Buddhist Pilgrimage']
        },
        subCategory:{
            type: String,
        },
        permits:{
            type: String,
            maxlength:100,
        },
        difficulty:{
            type: String,
        },
        accomodation:{
            type:String,
        },
        image:[{
            type:String, default:null
        }],
        itenerary:[{
            days:{
                type:String,
                required:true,
    
            },
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            }
        
        }],
        included:[{type:String}],
        notIncluded:[{type:String}],
        overview:{
           details:{
            type:String,
           },
           highlights:[{type:String}]
        }

        
        
}
)

module.exports = mongoose.model('Tours', TourSchema)