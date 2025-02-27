const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true]
    },
    expiresAt:{
        type:Date,
        required:[true]
    }
})
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation