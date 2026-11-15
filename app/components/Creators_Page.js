"use client"
import Link from 'next/link'
import React from 'react'

const Creators_Page = ({creators}) => {
  console.log(creators)
  return (
    <div className="creatorBox flex items-center justify-center">  
    <div className='creators grid grid-cols-[repeat(3,350px)] gap-5 text-white mt-9 mb-10 content-center justify-items-center'>
        {creators.map((creator,index)=>(
     <Link href={`https://get-me-a-chai-khaki-seven.vercel.app/${creator.Username}`}  key={creator._id}> 
     <div className="creator bg-blue-500 hover:-translate-y-1 w-[350px] h-[190px] p-5 rounded-2xl hover:border hover:border-purple-400">
      <div className="creatorInfoBox flex gap-3 mb-3">
      <div className="creatorSymbol rounded-full bg-amber-300 w-fit py-4 px-6 font-bold text-lg">{creator.Name[0]}</div>
      <div className="creatorInfo">
        <div className="creatorName text-xl">{creator.Name}</div>
        <div className="creatorUsername">@{creator.Username}</div>
      </div>

      </div>
      <div className='creatorAbout text-sm mb-5'>lets help {creator.Name}</div>
      <div className="supporterInfo flex justify-between">
        <div className="appIntro flex items-center justify-center font-bold text-sm mt-4 mb-4  gap-2.75">
      <img src="\tea_cup_image-removebg-preview.png" alt="" width={20}/>
      <div className="text">{creator.paymentCount} chais </div>
      </div>
     <button id="support" type='button' className='suppbtn cursor-pointer bg-purple-600 text-sm font-bold rounded-4xl px-6 py-0'>Support</button>
      </div>
      </div>
      </Link>
        ))}
    </div>
    </div>
  )
}

export default Creators_Page
