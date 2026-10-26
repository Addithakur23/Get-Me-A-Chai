"use client"
import Link from 'next/link'
import React from 'react'

const Creators_Page = ({creators}) => {
  return (
    <div className='creators flex flex-col gap-5   text-white'>
        {creators.map((creator,index)=>(
     <Link href={`https://get-me-a-chai-khaki-seven.vercel.app/${creator.Username}`}  key={creator._id}> <div className="creator bg-purple-700 hover:bg-purple-800">
        <div className="creatorName text-xl">{creator.Name}</div>
        <div className='creatorAbout text-sm'>lets help {creator.Name}</div>
      </div></Link>
        ))}
    </div>
  )
}

export default Creators_Page
