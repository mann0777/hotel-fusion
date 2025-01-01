import { NextResponse } from "next/server";
import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export async function GET(request, {params}) {
    const { id } = await params;
    await connectDB();

    try{
        const hotel = await Hotel.findById(id);
        if(!hotel){
            return NextResponse.json({message: "Hotel not found"},
                {status: 404});
        } 
        return NextResponse.json(hotel);

    }
    catch(error){
        console.error("Error fetching hotel details:" , error );
        return NextResponse.json({message: "Error fetching hotel details"},{status: 500});
    }
}