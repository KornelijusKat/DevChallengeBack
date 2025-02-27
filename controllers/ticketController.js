const Ticket = require('../models/ticketModel')
//Vienintelis kuris viekia :D
exports.getTicket = async(req,res) =>{
    try{
        const {code, name} = req.body;
        const ticket = await Ticket.find({code}).populate({
            path: 'booking',
            select:'name'
        })
        if(!ticket){
            return res.status(401).json({
                error:'unauthorized'
            })
        }
        res.status(200).json({
            tickets: ticket
        })
    } catch(err){
    res.status(500).json({
        status:'failed',
        message:err.message
    })}
}
exports.cancelTicket = async(req, res) =>{
    try{
        const {code, name} = req.body;
        const ticket = await Ticket.findOne({code}).populate({
            path: 'booking',
            select:'name'
        })
        if(!ticket){
            return res.status(401).json({
                error:'unauthorized'
            })
        }
        if(name === ticket.booking.name){
            const deleted = await Ticket.findByIdAndDelete(ticket._id)
            return res.status(204).json({
                status:'success'
            })
        }
        return res.status(404).json({
            message:'didnt finish, woops'
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}