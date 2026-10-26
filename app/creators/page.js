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
        Name:creator.Name
      }))
    }
    
    return (
      <>
      <Creators_Page creators={safeCreator}/>
    </>
  )
}

export default page
