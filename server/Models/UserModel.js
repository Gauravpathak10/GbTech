import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = Schema({
    UserName: {
        type: String,
        required: [true, "UserName can't be blank"]
    },
    email: {
        type: String,
        required: [true, "Email can't be blank"],
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"]
    },
}, { timestamps: true })




const UserSettings = mongoose.model('User', UserSchema)

export default UserSettings;