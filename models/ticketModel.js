const mongoose = require('mongoose')
const codeRandomizer = require('../ApiTools/randomCodeGen')
//randomizes code on creation
const ticketSchema = new mongoose.Schema({
    code:{
        type:String,
        unique: true,
        default: codeRandomizer,
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
