
/*import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json(); // Parse incoming JSON data

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Simulate success response
    return new Response(
      JSON.stringify({
        message: "Register endpoint is working!",
        data: { name, email, password },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in POST /api/example/register:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

*/


import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const { name, email, password } = await req.json();

    // Validate required fields
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ msg: "All fields are mandatory!" }),
        { status: 400 }
      );
    }

    // Check if the email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return new Response(
        JSON.stringify({ msg: "User already registered!" }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const result = await newUser.save();
    console.log("User Saved:", result);

    // Generate a JWT token
    const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

    // Return the response
    return new Response(
      JSON.stringify({
        msg: "Registered Successfully!",
        token,
      }),
      { status: 201 }
    );
  } 
  catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ msg: "Server error, please try again later." }),
      { status: 500 }
    );
  }
}
