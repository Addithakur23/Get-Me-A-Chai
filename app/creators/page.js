import React from 'react'
import connectDB from '@/lib/mongoConnect'
import User from '@/models/User'
import creators_Page from '../components/creators_Page'
const page = async() => {
    const users=await User.find({})


  return (
    <div>
      <creators_Page creators={users}/>
    </div>
  )
}

export default page
