import React from 'react'
import PaymentPage from '../components/PaymentPage.js'
import connectDB from '@/lib/mongoConnect.js'
import User from '@/models/User.js'
import { notFound } from 'next/navigation.js'

const Username = async({params}) => {
  let p=await params
  let username=p.username

  const checkUser= async()=>{
    await connectDB()
   let user=await User.findOne({Username:username})
   if(!user){
     return notFound()
   }
  }
  await checkUser()
        return (
          <>
          <PaymentPage  username={username}/>
      </>
    )
  }

export default Username