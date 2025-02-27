const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please input name']
    },
    address:{
        type:String,
        required:[true, 'please Input adress']
    },
    city:{
        type:String,
        required:[true, 'please input city']
    },
    zip:{
        type:String,
        required:[true, 'please input zip code']
    },
    country:{
        type:String,
        required:[true, 'please input country']
    },
    created_at:{
        type:Date,
        default:Date.now
    }

})
const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking