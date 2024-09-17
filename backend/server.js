import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import songRouter from './src/routes/songroute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumroute.js';
//app config
const app=express();
const port=process.env.PORT || 4000;
//DB connection:
connectDB();
connectCloudinary();
//middlewares
app.use(express.json());
app.use(cors());//to connect front and backend running at diff ports

//initializing routes:
app.use("/api/song",songRouter)
app.use("/api/album",albumRouter);

app.get('/',(req,res)=>res.send("api is working"));


app.listen(port,()=>console.log(`Server is started at ${port}`));