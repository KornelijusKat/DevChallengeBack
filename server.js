const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path: './config.env'});
const app = require('./app.js')
const port = process.env.PORT || 3000

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DB_PASSWORD
);
mongoose.connect(DB).then(()=>console.log('DB connection is ok'));


app.listen(port, ()=> console.log(`app running on port ${port}`))