const express = require('express')
const morgan = require('morgan')

const app = express();
if(process.env.Node_ENV === 'development')
{
    app.use(morgan('dev'))
}
app.use(express.json())
module.exports = app;