import Payment from "@/models/Payment"
import crypto from "crypto"
import decrypt from "@/lib/decrypted.js"
import { NextResponse } from "next/server"
import connectDB from "@/lib/mongoConnect.js";
import User from "@/models/User";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET(){
    
     try { await connectDB()
       const session = await getServerSession(authOptions);
       console.log("Provider:",session.provider)
       const creator=await User.findOne({Provider:session.provider})
     const response=await Payment.find({creatorId:creator._id}).sort({Amount:-1}).limit(10)
     const all=await Payment.find({ creatorId:creator._id})
     const total=all.reduce((sum,Payment)=>sum+Payment.Amount,0)
     const Payerscount=await Payment.countDocuments({creatorId:creator._id})
        return NextResponse.json({response,totalAmount:total,totalPayments:Payerscount},{status:200})}
        catch(error){
            return NextResponse.json({message:error.message},{status:500})
        }
    
}


export async function POST(request){
     await connectDB();
      const session = await getServerSession(authOptions);
    const body=await request.json()
      const creator=await User.findOne({Username:body.Username,Provider:session.provider})
      const razorpaySecret=decrypt(
              creator.Razorpay.secret,
              creator.Razorpay.iv
          )
    const generatedSignature=crypto
    .createHmac("sha256",razorpaySecret)
    .update(body.razorpay_order_id+"|"+body.razorpay_payment_id
    ).digest("hex")

    if(generatedSignature==body.razorpay_signature){
        await Payment.create({
            creatorId:creator._id,
            payerName:body.payerName,
            Message:body.Message,
            Amount:body.payerAmount,
            razorpayOrderId:body.razorpay_order_id,
        razorpayPaymentId:body.razorpay_payment_id,
        razorpaySignature:body.razorpay_signature,
        status:"success"
        })
        return NextResponse.json({message:"Payment verified successfully"},{status:200})
    }

    else{
        return NextResponse.json({message:"Payment verification failed"},{status:500})
    }
}