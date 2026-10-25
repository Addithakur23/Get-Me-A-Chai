import React from 'react'
import Creators_Page from '../components/Creators_Page'
import { getAllUsers } from '../api/user/route'
const page = async() => {
    const creators=await getAllUsers()
    const safeCreator=[]
    if(creators){
      safeCreator=creators.map((creator)=>({
        _id:creator._id.toString(),
        Username:creator.Username,
        Name:creator.Name
      }))
    }
    console.log(creators)
    
    return (
      <>
      <Creators_Page creators={safeCreator}/>
      hello
    {/* <div className='text-white'>
      
    </div> */}
    {/* <div className='creators flex flex-col gap-5 bg-purple-700 hover:bg-purple-800 text-white'>
      {console.log(creators)}
        {creators.map((creator,index)=>(
      <div className="creator" key={index}>
        <div className="creatorName text-xl">{creator.Name}</div>
        <div className='creatorAbout text-sm'>lets help {creator.Name}</div>
      </div>

        ))}
    </div>  */}
    </>
  )
}

export default page
