import mongoose, { Schema } from "mongoose";
const UserSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Username:String,
    Profile_picture:String,
    Cover_picture:String,
    Provider:{
        type:String,
        required:true
    },
    ProviderAccountID:{
        type:String,
        required:true
    },
    Razorpay:{
        ID:String,
        secret:String,
        iv:String
    }
})

export default mongoose.models.User ||mongoose.model("User",UserSchema)