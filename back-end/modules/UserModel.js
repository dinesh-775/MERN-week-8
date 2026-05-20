import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: {
        required: [true, "name is required"],
        type: String

    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email is already used by another user"]
    },
    dateofbirth: {
        type: String,
        required: [true, "Date Of Birth is Required"]
    },
    mobilenumber: {
        type: Number,
        required: [true, "number is required!"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    strict: "throw",
    timestamps: true,
    versionKey: false
})
export const UserModel = model('users', userSchema)