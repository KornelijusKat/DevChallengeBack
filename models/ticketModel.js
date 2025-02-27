const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    code:{
        type:String,
        required:[true]
    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Booking'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const Ticket = mongoose.model('Ticket', ticketSchema)
module.exports = Ticket
