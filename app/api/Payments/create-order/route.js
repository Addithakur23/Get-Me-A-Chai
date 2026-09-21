import Razorpay from "razorpay";
import decrypt from "@/lib/decrypted.js";
import User from "@/models/User.js";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoConnect.js";

 export async function POST(request){
  try {  
     await connectDB();
    const body=await request.json()
    const creator=await User.findOne({Username:body.Username})
    if(!creator){
        return NextResponse.json({message:"User not found"},{status:404})
    }
    if(!creator.Razorpay?.ID|| !creator.Razorpay?.secret){
         return NextResponse.json(
            {message:"Creator has not configured Razorpay"},
            {status:400})
    
        }
    const secret=decrypt(
        creator.Razorpay.secret,
        creator.Razorpay.iv
    )
    const razorpay=new Razorpay({
        key_id:creator.Razorpay.ID,
        key_secret:secret
    })
    const order=await razorpay.orders.create({
        amount:body.payerAmount*100,
        currency:"INR",
        receipt:`receipt_${Date.now()}`
    })
    
    return NextResponse.json(order,{status:201})
}catch (error) {
    console.error("Create Order Error:", error);

    return NextResponse.json(
        {
            message: error.message,
            stack: error.stack,
        },
        { status: 500 }
    );
}

}