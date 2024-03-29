const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);


mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.utstgc3.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(5000);
    console.log("database is connected");
    console.log("listening to 5000");
}).catch((err)=>console.log(err)); 