const mongoose = require('mongoose')

const locationSeats = new mongoose.Schema({
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
        ref:'Ticker'
    }
})