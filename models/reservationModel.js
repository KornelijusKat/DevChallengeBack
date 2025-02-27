const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
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