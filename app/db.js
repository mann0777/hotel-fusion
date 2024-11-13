 import mongoose from "mongoose";

 const URI = "mongodb+srv://admin:Mannsharma@77@cluster0.8q1ob.mongodb.net/FUSION";

 const connectDB = async()=>{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("DB Connected...");
 };

 export default connectDB;