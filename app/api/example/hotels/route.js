import connectDB from "@/db";  // Adjust the path if necessary
import Hotel from "@/models/hotel-model";

export async function GET(req) {
  // Extract the query parameter 'city' from the request URL
  const { city } = req.nextUrl.searchParams;

  // Connect to the MongoDB database
  await connectDB();

  try {
    let hotels;

    if (city) {
      // If 'city' query parameter is provided, filter by location (city)
      hotels = await Hotel.find({ location: city });
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
        JSON.stringify({ msg: "No hotels found" }),
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
