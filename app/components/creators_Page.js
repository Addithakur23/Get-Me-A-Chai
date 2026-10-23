"use client"
import React from 'react'

const Creators_Page =async ({creators}) => {
    console.log(creators)
  return (
    <div className='creators flex flex-col gap-5 bg-purple-700 hover:bg-purple-800 text-white'>
        {creators.map((creator,index)=>{
      <div className="creator" key={index}>
        <div className="creatorName text-xl">{creator.Name}</div>
        <div className='creatorAbout text-sm'>lets help {creator.Name}</div>
      </div>

        })}
    </div>
  )
}

export default Creators_Page
