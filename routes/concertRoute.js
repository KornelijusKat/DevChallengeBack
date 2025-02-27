const concertController = require('../controllers/concertController')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(concertController.getConcerts)
router
    .route('/:id')
    .get(concertController.getConcert)
router
    .route('/:concert-id/shows/:show-id/seating')
    .get(concertController.getSeating)
router
    .route('/:concert-id/shows/:show-id/reservation')
    .post(concertController.createReservation)
router
    .route('/:concert-id/shows/:show-id/booking')
    .post(concertController.createBooking)

module.exports = router;
