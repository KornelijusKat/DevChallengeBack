const ticketController = require('../controllers/ticketController')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .post(ticketController.getTicket)
router
    .route('/:ticket-id/cancel')
    .post(ticketController.cancelTicket)
module.exports = router