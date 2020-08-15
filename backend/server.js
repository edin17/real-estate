import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import config from './config'
import userRoute from './routes/userRoute'
import bodyParser from 'body-parser';
import productRoute from './routes/productRoute'
import messageRoute from './routes/messageRoute';
dotenv.config();
const app=express();

const mongodbUrl=process.env.MONGODB_URL;
mongoose.connect(mongodbUrl,{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true},()=>{
    console.log('connected')
}).catch(error=>console.log(error.reason));
app.use(bodyParser.json());
app.use('/api/users',userRoute);
app.use('/api/products',productRoute)
app.use('/api/message',messageRoute)
app.listen(5000);

console.log('server started')