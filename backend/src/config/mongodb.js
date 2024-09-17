import mongoose from "mongoose";

const connectDB=async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("connection established in DB");
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/Musicplayer`);
}

export default connectDB;