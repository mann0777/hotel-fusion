import React from 'react'
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from '@/db';

export default async function handler(res , req) {
    if(req.method == "POST"){
        await connectDB
    }
    
}