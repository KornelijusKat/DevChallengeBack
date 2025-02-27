const express = require('express')
const morgan = require('morgan')
const concertRouter = require('./routes/concertRoute')
const ticketRouter = require('./routes/ticketRoute')

const app = express();
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}
app.use(express.json())
app.use('/api/v1/concerts', concertRouter);
app.use('/api/v1/tickets', ticketRouter);
module.exports = app;