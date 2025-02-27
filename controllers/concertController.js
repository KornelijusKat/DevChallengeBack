const Concert = require('../models/concertsModel')
const Reservation = require('../models/reservationModel')
const Booking = require('../models/bookingModel')
exports.getConcerts = async(req,res) => {
    try{
        const data = await Concert.find().populate([
            {
                path:'location',
                select:'_id name'
            },{
            path:'shows',
            select:'_id start end'
        }])
        res.status(200).json({
            concerts:{
                data
            }
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}
exports.getConcert = async(req,res) =>{
    try{
        const response = await Concert.findById(req.params.id).populate([
            {
                path:'location',
                select:'_id name'
            }, {
            path:'shows',
            select:'_id start end'
        }])
        if(!concert){
            return res.status(404).json({
                error: 'A concert with this ID does not exist'
            })
        }
        res.status(200).json({
            concert:{
                response
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
        res.status(500).json({
            status:failed,
            message:err.message
        })
    }
}
exports.createBooking = async(req, res) => {
    try{
      
        const {reservation_token} = req.body
        const reservation = await Reservation.find(reservation_token)
        if(reservation.expiresAt === false){
            return  res.status(401).json({
               error: 'Unauthorized'
            })
        }
        const booking = await Booking.create(req.body)

    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}