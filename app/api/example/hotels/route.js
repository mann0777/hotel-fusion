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
 
import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  console.log('Received city:', city); // Log the received city

  await connectDB();

  try {
    let hotels;
    let query = {};

    if (city && city.trim() !== '') {
      query = { location: { $regex: new RegExp(city, 'i') } };
      console.log('Search query:', JSON.stringify(query)); // Log the search query
    }

    hotels = await Hotel.find(query);

    console.log('Number of hotels found:', hotels.length); // Log the number of hotels found
    if (hotels.length > 0) {
      console.log('First hotel:', JSON.stringify(hotels[0])); // Log the first hotel
    }

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
          status: 200,
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
