const Ticket = require('../models/ticketModel')

exports.getTicket = async(req,res) =>{
    const {code, name} = req.body;
    const tickets = await Ticket.aggregate([
        {
            $lookup:{
            from:'tickets',
            localField:'tickets',
            foreignField:'booking',
            }
        },{
            $match: {
                'booking': {$elemMatch: { name:}}
            }
        }   
     
    ]
}
