const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
   packageName:{
      type:String,
      required:[true,'Please provide package name']
   },
   name:{
        type:String,
        required:[true, 'Please provide your name'],
        maxlength: 100,
     },
     email:{
        type:String,
        required:[true, 'Please provide email']
     },
     country:{
        type:String,
        required:[true,"please enter country you are from"]

     },
     contact:{
        type:Number,
        required:[true, "please provide your contact number"],
        maxlength:20,
     },
     numberOfAdult:{
        type:Number,
        required:[true,'Please provide number of adult']
     },
     numberOfChildren:{
        type:Number
     },
     subject:{
        type:String
     },
     message:{
        type:String
     }

})

module.exports = mongoose.model('Query', QuerySchema)