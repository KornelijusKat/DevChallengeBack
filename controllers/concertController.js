const Concert = require('../models/concertsModel')
const Reservation = require('../models/reservationModel')
exports.getConcerts = async(req,res) => {
    try{
        const concerts = await Concert.find().populate({
            path:'shows',
            select:'_id start end'
        })
        res.status(200).json({
            concerts:{
                data
            }
        })
    }catch(err){
        res.status(500).json({
            status:failed,
            message:err.message
        })
    }
}
exports.getConcert = async(req,res) =>{
    try{
        const concert = await Concert.findById(req.params.id).populate({
            path:'shows',
            select:'_id start end'
        })
        if(!concert){
            return res.status(404).json({
                error: 'A concert with this ID does not exist'
            })
        }
        res.status(200).json({
            concert:{
                concert
            }
        })
    }catch(err){
        res.status(500).json({
            status:failed,
            message:err.message
        })
    }
}
exports.getSeating = async(req, res) =>{
    try{
        const concert = await Concert.findById(req.params.id)
    }catch(err){

    }
}
exports.createReservation = async(req,res) =>{
    try{
        const reservation = await Reservation.create(req.body)



    }catch(err){

    }
}