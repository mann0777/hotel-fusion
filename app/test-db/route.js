// app/test-db/route.js
import connectDB from "../db";

export async function GET(req) {
  try {
    // Try to connect to the database
    await connectDB();
    
    // If the connection is successful, return a success response
    return new Response(
      JSON.stringify({ msg: "Database connection successful!" }),
      { status: 200 }
    );
  } catch (error) {
    // If there's an error in connection, return a failure response
    return new Response(
      JSON.stringify({ msg: "Database connection failed!", error: error.message }),
      { status: 500 }
    );
  }
}

