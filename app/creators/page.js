import React from 'react'
import Creators_Page from '../components/Creators_Page'
import { getAllUsers } from '../api/user/route'
import Payment from '@/models/Payment'
import connectDB from '@/lib/mongoConnect'
import decrypt from '@/lib/decrypted'
const page = async() => {
  await connectDB()

    const creators=await getAllUsers()
    let safeCreator=[]
    console.log(creators)
    if(creators){
      safeCreator=await Promise.all(creators.map(async (creator)=>({
        _id:creator._id.toString(),
        paymentCount:await Payment.countDocuments({creatorId:creator._id}),
        Username:creator.Username,
        Name:creator.Name,
        Email:creator.Email,
        Provider:creator.provider,
         Razorpay: {
        ID: creator.Razorpay.ID,
        secret:creator.Razorpay.secret,
        iv:creator.Razorpay.iv
    }
    })))
    }
    
    return (
      <>
      <div className="appIntro flex items-center justify-center font-bold text-[17px] mt-4 mb-4  gap-2.75">
      <div className="text">Get Me a Chai </div>
      <img src="\tea_cup_image-removebg-preview.png" alt="" width={40}/>
      </div>
      <div className="Heading text-5xl font-bold text-center mb-3">Discover creators</div>
      <div className="subheading text-center text-gray-300">Buy a creator a chai and help them keep making great things.</div>
      <div className="searchElement flex items-center justify-center">
      <div className="searchBar mt-9 bg-transparent relative ">
        <input type="text" placeholder='Search creators...' className='bar border-white border py-4 pl-11 pr-56 rounded-4xl'/>
          <img src="/search.png" alt="" width={19} className='absolute top-1/2 left-3 -translate-y-1/2'/>
      </div>
      </div>
      <Creators_Page creators={safeCreator}/>
    </>
  )
}

export default page
