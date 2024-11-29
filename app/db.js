import mongoose from "mongoose";

// Your connection string (updated with your database name)
const URI = "mongodb+srv://mannamloh77:Mannsharma77@project.zncnv.mongodb.net/FUSION?retryWrites=true&w=majority&appName=Project";


const connectDB = async () => {
  try {
    // Try to establish a connection to MongoDB
    const connection = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DB Connected: ${connection.connection.host}`);
  } 
  catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;
