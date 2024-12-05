
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from '@/db';

// Use named export for POST method
export async function POST(req) {
    // Manually parse the request body as JSON
    const body = await req.json(); // This ensures the body is parsed
    const { email, password } = body; // Extract email and password

    // Check if email or password is missing
    if (!email || !password) {
        return new Response(
            JSON.stringify({ msg: "Email and Password are required!" }),
            { status: 400 }
        );
    }

    // Check if the email exists in the database
    const emailExists = await User.findOne({ email });
    if (!emailExists) {
        return new Response(
            JSON.stringify({ msg: "Please register email first" }),
            { status: 400 }
        );
    }

    // Check if the password matches
    const passwordMatched = await bcrypt.compare(password, emailExists.password);
    if (!passwordMatched) {
        return new Response(
            JSON.stringify({ msg: "Invalid Credentials" }),
            { status: 400 }
        );
    }

    // Generate a JWT token
    const token = jwt.sign({ token: emailExists._id }, "Code_MS", { expiresIn: "30d" });

    // Return a successful response with the token
    return new Response(
        JSON.stringify({ msg: "Logged in Successfully !!", token }),
        { status: 200 }
    );
}
