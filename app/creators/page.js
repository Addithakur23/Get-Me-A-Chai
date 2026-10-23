import React from 'react'
import connectDB from '@/lib/mongoConnect'
import User from '@/models/User'
import Creators_Page from '../components/Creators_Page'
const page = async() => {
    await connectDB()
    const users=await User.find({})
    console.log(users)
    
    return (
      <>
    <div className='text-white'>
      <Creators_Page creators={users}/>
      hello
    </div>
    </>
  )
}

export default page
