import mongoose, { Schema } from "mongoose";
const PaymentSchema=new mongoose.Schema({
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    payerName:String,
    Message:String,
    Amount:Number,
    razorpayOrderId:String,
    razorpayPaymentId:String,
    razorpaySignature:String,
    status:{
        type:String,
        default:"Suceess"
    }
},
{timestamps:true}
)

export default mongoose.models.Payment ||mongoose.model("Payment",PaymentSchema)