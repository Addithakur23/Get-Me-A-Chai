import React from 'react'
import Creators_Page from '../components/Creators_Page'
import { getAllUsers } from '../api/user/route'
import decrypt from '@/lib/decrypted'
const page = async() => {
    const creators=await getAllUsers()
    let safeCreator=[]
    if(creators){
      safeCreator=creators.map((creator)=>({
        _id:creator._id.toString(),
        Username:creator.Username,
        Name:creator.Name,
        Email:creator.Email,
        Provider:creator.provider,
         Razorpay: {
        ID: creator.Razorpay.ID,
        secret:creator.Razorpay.secret,
        iv:creator.Razorpay.iv
    }
    }))
    }
    
    return (
      <>
      <div className="appIntro flex items-center justify-center font-bold text-[20px]   gap-2.75">
      <div className="text">
       Get Me a Chai </div>
      <img src="\tea_cup_image-removebg-preview.png" alt="" width={40}/>
      </div>
      <div className="Heading text-5xl font-bold text-center">Discover Creators</div>
      <div className="searchElement flex items-center justify-center">
      <div className="searchBar mt-7 relative ">
        <input type="text" placeholder='Enter creator Name' className='bar border-white border py-4 pl-11 pr-40 rounded-4xl'/>
          <img src="/search.png" alt="" width={25} className='absolute top-1/2 left-3 -translate-y-1/2'/>
      </div>
      </div>
      <Creators_Page creators={safeCreator}/>
    </>
  )
}

export default page
