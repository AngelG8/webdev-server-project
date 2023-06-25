import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    role: {
        type: String,
        enum: ["admin", "viewer", "creator"],
        default: "viewer",
    },
    dob: Date,
    created: { type: Date, default: Date.now },


}, { collection: "users" });
export default usersSchema;