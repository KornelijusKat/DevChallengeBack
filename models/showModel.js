const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    concertId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true]
    },
    start:{
        type:Date,
        default: 0
    },
    end:{
        type:Date,
        default: 0
    }
})
const Show = mongoose.model('Show', showSchema)
module.exports = Show;