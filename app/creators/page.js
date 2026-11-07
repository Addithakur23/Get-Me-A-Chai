import React from 'react'
import Creators_Page from '../components/Creators_Page'
import { getAllUsers } from '../api/user/route'
const page = async() => {
    const creators=await getAllUsers()
    let safeCreator=[]
    if(creators){
      safeCreator=creators.map((creator)=>({
        _id:creator._id.toString(),
        Username:creator.Username,
        Name:creator.Name,
        Email:creator.Email,
        Provider:creator.provider
    }))
    }
    console.log(safeCreator)
    
    return (
      <>
      <div className="appIntro flex items-center justify-center font-bold text-[20px]   gap-2.75">
      <div className="text">
       Get Me a Chai </div>
      <img src="\tea_cup_image-removebg-preview.png" alt="" width={40}/>
      </div>
      <div className="Heading text-5xl font-bold text-center">Discover Creators</div>
      <div className="searchBar text-center">

       <div className="searchField relative">
        <input type="text" placeholder='Enter creator Name' className='bar w-[30vw] border-white border py-4 px-8 rounded-4xl'/>
        </div>
       <div className="searchImage ">
        <img src="/search.png" alt="" width={30} className='absolute'/>
        </div>

      </div>
      <Creators_Page creators={safeCreator}/>
    </>
  )
}

export default page
