const mongoose = require('mongoose')

const locationSeatRowSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    order:{
        type:Int16Array,
        required:true
    },
    show:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})
const LocationSeatRow = mongoose.model('LocationSeatRow', locationSeatRowSchema)
module.exports = LocationSeatRow