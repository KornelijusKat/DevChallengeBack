const mongoose = require('mongoose')

const locationSeatsSchema = new mongoose.Schema({
    location:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"LocationSeatRow"
    },
    number:{
        type:Int,
        required:[true]
    },
    reservationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reservation"
    },
    ticketId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ticket'
    }
})
const LocationSeats = mongoose.model('LocationSeats', locationSeatsSchema)
module.exports = LocationSeats