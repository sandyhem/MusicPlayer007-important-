import { addSong,listSong,removeSong } from "../controllers/songController.js";
import express from 'express';
import upload from "../middlewares/multer.js";


const songRouter=express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1},{name:'video',maxCount:1}]),addSong);//send through form-data
songRouter.get('/list',listSong);
songRouter.post('/remove',removeSong); //send through json

export default songRouter;