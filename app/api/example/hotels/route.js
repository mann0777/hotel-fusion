/*import connectDB from "@/db"; // Assuming you have the correct path
import Hotel from "@/models/hotel-model"; // Assuming the path to the Hotel model

export async function GET(req) {
  const { city } = req.nextUrl.searchParams; // Extract the 'city' parameter from the URL
  
  await connectDB(); // Ensure database connection
  
  try {
    let hotels;

    if (city) {
      // If 'city' is provided in the query, filter the hotels based on location
      hotels = await Hotel.find({ location: { $regex: city, $options: 'i' } });  // Case-insensitive regex match
    } else {
      // If no 'city' is provided, return all hotels
      hotels = await Hotel.find({});
    }

    // Respond with hotels found or a message indicating no hotels were found
    if (hotels.length > 0) {
      return new Response(
        JSON.stringify({ msg: "Data fetched successfully", data: hotels }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ msg: `No hotels found for ${city}` }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return new Response(
      JSON.stringify({ msg: "Internal server error", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
  */
 
import connectDB from "@/db";  // Adjust the path if necessary
import Hotel from "@/models/hotel-model";

export async function GET(req) {
  // Extract the query parameter 'city' from the request URL
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  // Connect to the MongoDB database
  await connectDB();

  try {
    let hotels;

    if (city) {
      // If 'city' query parameter is provided, filter by location (city) case-insensitively
      hotels = await Hotel.find({ location: { $regex: new RegExp(city, 'i') } });
    } else {
      // If no query parameter is provided, return all hotels
      hotels = await Hotel.find({});
    }

    // Return the fetched hotels in the response
    if (hotels.length > 0) {
      return new Response(
        JSON.stringify({ msg: "Data fetched successfully", data: hotels }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ msg: "No hotels found", data: [] }),
        {
          status: 200,  // Changed from 404 to 200 as it's not an error condition
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return new Response(
      JSON.stringify({ msg: "Internal server error", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}