import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    banner: {
        type: String,
        required: true,
    },
    gallery: [
        {
            type: String,
        },
    ],
    price: {
        type: Number,
        required: true,
    },
    facilities: [
        {
            img: String,
            name: String,
        },
    ],
    location: {
        type: String,
    },
}, { timestamps: true });

// Ensure the model is only created once
const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
