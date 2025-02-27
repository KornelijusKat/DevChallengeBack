const mongoose = require('mongoose')

const concertSchema = new mongoose.Schema({
    artist:{
        type:String,
        required:[true, 'Please input artist name']
    },
    location:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Location"
    },
    shows:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Show"
    }]
})

const Concert = mongoose.model('Concert', concertSchema)
module.exports = Concert