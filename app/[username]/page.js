import React from 'react'
import PaymentPage from '../components/PaymentPage.js'
import connectDB from '@/lib/mongoConnect.js'
import User from '@/models/User.js'
import { notFound } from 'next/navigation.js'

const Username = async({params}) => {
  const checkUser= async()=>{
    await connectDB()
    let p=await params
   let user=await User.findOne({Username:p.username})
   if(!user){
     return notFound()
   }
  }
  await checkUser()
        return (
          <>
          <PaymentPage/>
      </>
    )
  }

export default Username