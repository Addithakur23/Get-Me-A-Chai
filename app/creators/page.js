import React from 'react'
import connectDB from '@/lib/mongoConnect'
import User from '@/models/User'
import creators_Page from '../components/creators_Page.js'
const page = async() => {
    await connectDB()
    const users=await User.find({})
    console.log(users)
    
  return (
    <div className='text-white'>
      hello
     <creators_Page creators={users}/>
    </div>
  )
}

export default page
