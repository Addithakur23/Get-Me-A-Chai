import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoConnect.js";
import User from "@/models/User.js";
import encrypt from "@/lib/encrypted.js";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { handler } from "@/app/api/auth/[...nextauth]/route.js";

export async function GET() {
    try {
        await connectDB();
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }
        

        const user = await User.findOne({ Email: session.user.email ,Provider:session.provider}).lean();

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
    Name: user.Name,
    Email: user.Email,
    Username: user.Username,
    Profile_picture: user.Profile_picture,
    Cover_picture: user.Cover_picture,
    Razorpay: {
        ID: user.Razorpay.ID
    }
}, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
export async function PUT(request){

    try{
        await connectDB();
          const session = await getServerSession(authOptions);
        const body=await request.json()
        const update={
            Name:body.Name,
            Username:body.Username,
            Profile_picture:body.Profile_picture,
            Cover_picture:body.Cover_picture,
            "Razorpay.ID":body.Razorpay_ID
            
        }
        if(body.Razorpay_secret){
            const{iv,encryptedData}=encrypt(body.Razorpay_secret)
          update["Razorpay.secret"]=encryptedData
          update["Razorpay.iv"]=iv
        }
        const updateUser=await User.findOneAndUpdate(
            {Email:body.Email ,Provider:session.provider}
            ,{$set:update}
        ,{new:true}
        )
         return NextResponse.json(updateUser,{status:201})
     }catch(error){
        return NextResponse.json(
            {message:error.message},
            {status:500})
     }
}


export async function POST(request){
    try{
        await connectDB();
        const body=await request.json()
        const existingUser=await User.findOne({Username:body.Username})
        if(existingUser){
            return NextResponse.json({message:"User already exists with this username"},{status:400})
        }
        const{iv,encryptedData}= encrypt(body.Razorpay_secret)
        const user=await User.create({
            Name:body.Name,
            Email:body.Email,
            Username:body.Username,
            Profile_picture:body.Profile_picture,
            Cover_picture:body.Cover_picture,
            Provider:body.Provider,
            ProviderAccountID:body.ProviderAccountID,
            Razorpay:{
                ID:body.Razorpay_ID,
                secret:encryptedData,
                iv:iv,
            }
        })
        return NextResponse.json(user,{status:201})
    } catch(error){
       return NextResponse.json(
            {message:error.message},
            {status:500}
        )
    }
}