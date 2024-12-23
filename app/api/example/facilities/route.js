import connectDB from "@/db";
import Hotel from "@/models/hotel-model";
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await connectDB();
        const facilities = await Hotel.distinct('facilities.name');
        return NextResponse.json({ facilities });
    } catch (error) {
        console.error('Error fetching facilities:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        
        console.log('Received filter criteria:', body);

        // Build the filter query
        const filter = {};
        
        if (body.facilities && body.facilities.length > 0) {
            filter['facilities.name'] = { $in: body.facilities };
        }
        
        if (body.priceRange) {
            filter.price = { 
                $gte: body.priceRange[0], 
                $lte: body.priceRange[1] 
            };
        }

        console.log('Constructed filter:', filter);

        const hotels = await Hotel.find(filter);
        
        console.log('Number of hotels found:', hotels.length);

        return NextResponse.json({ 
            hotels, 
            total: hotels.length 
        });
    } catch (error) {
        console.error('Error filtering hotels:', error);
        return NextResponse.json({ error: 'Filter Error' }, { status: 500 });
    }
}
