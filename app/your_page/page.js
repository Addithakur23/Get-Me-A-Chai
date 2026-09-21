"use client"
import React from 'react'
import Script from 'next/script.js'
import Dash_Navbar from '../components/Dash_Navbar.js'
import Footer from '../components/Footer.js'
import { useState,useEffect } from 'react'
import { NextResponse } from 'next/server.js'

import Razorpay from 'razorpay'
import Hamburger from '../components/Hamburger.js'

const page = () => {
   const [User, setUser] = useState(null)
    const [Payers, setPayers] = useState(null)
   const [payerName, setpayerName] = useState("")
   const [Message, setMessage] = useState("")
   const [payerAmount, setpayerAmount] = useState("")
   const [Active, setActive] = useState(false)
   const [Click, setClick] = useState(false)

   async function loadPayers(){
     const response=await fetch("/api/Payments/verify")
     if(!response.ok) return;
     const payers=await response.json()
     setPayers(payers)
   
    }
    useEffect(() => {
      async function loadUser() {
        const response=await fetch("/api/user")
        if(!response.ok) return;
           const user=await response.json()
           setUser(user)
   
         }
      loadUser()
      loadPayers()
  }, []);

  if(!User){
    return <div>Loading !!!</div>
  }

  async function payHandler() {
  
  if(payerName==""|| payerAmount==""){
    alert("Please fill the Name and Amount field")
    return
  }

  if(payerAmount<1){
     alert("Please enter amount greater than 0")
    return
    }
  const response=await fetch("/api/Payments/create-order",{method:"POST", headers:{"Content-type":"application/json"},body:JSON.stringify({payerName,Message,payerAmount,Username:User.Username})})
  if(!response.ok){
    const error=await response.json()
    console.error(error.message)
    return
  }
  const order=await response.json()
  
  const options={
    key:User.Razorpay.ID,
    amount:order.amount,
    currency:order.currency,
    order_id:order.id,
    
    name:"Get Me a Chai",
    handler:async function (response) {
      await fetch("/api/Payments/verify",{method:"POST", headers:{"Content-type":"application/json"},body:JSON.stringify({payerName,Message,payerAmount,Username:User.Username,razorpay_order_id:response.razorpay_order_id,
        razorpay_payment_id:response.razorpay_payment_id,
        razorpay_signature:response.razorpay_signature
      })})      
      await loadPayers()

      setActive(true)
      setTimeout(() => {
        setActive(false)
      }, 4000);
    }
  }
 
  const rzp=new window.Razorpay(options);
  rzp.open();

  setpayerName("")
  setpayerAmount("")
  setMessage("")
 }
      function handleClick(){
     setClick(true)
      setTimeout(() => {
     
     setClick(false)
   }, 3000);
  }
        return (
          <>
          <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive"/>
    <div className='mainYourPage'>
        <Dash_Navbar/>
      { Active? <Hamburger/>:""}
        <div className="cover_Picture">
          <img className='cover_pictureImg w-full h-[35vh] relative' src={User.Cover_picture} alt="" height={50} />
        </div>
        <div className="profile_Picture flex justify-center">
          <img className='profile_pictureImg absolute top-[244px] border-2 border-white rounded-[100px] z-200' src={User.Profile_picture} alt="" width={100}  />
        </div>
        <div className="userInfo flex flex-col justify-center items-center gap-2.25 mt-17.5 text-gray-400">
          <div className="name font-medium text-white">@{User.Username}</div>
          <div className="nameText text-[13px]">Lets help {User.Name} get a chai!</div>
          <div className="payments text-[13px]">{Payers?.totalPayments} payments . ₹{Payers?.totalAmount} raised</div>
        </div>

        <div className="userCards  flex    max-[996px]:flex-col max-[996px]:items-center justify-center gap-2.5 mb-[10%] ">
          {/* height: 547px;
    overflow: scroll; */}
        <div className="supporterCard hide-scrollbar overflow-y-scroll h-[547px] max-sm:!w-[81%] max-[996px]:!w-[80%] max-lg:w-[44%] w-[40%] py-9.75 bg-[#303841] rounded-md mt-11.75 ">
          
          <div className="supporterHeading ml-8.75 text-[25px] mb-3.5 font-bold">
          Top 10 Supporters
          </div>
          {/* max-[524px]:overflow-x-scroll  w-[513px] max-[530px]:w-[383px]*/}
        <div className='suppList  hide-scrollbar'>
          <div className="supportersList w-[81%]  flex flex-col text-sm justify-start items-start mt-2.5 ml-15">
            {Payers?.response.map((payment)=>(
              <div className="supporter flex gap-2.5 mb-[22px]  text-sm flex-wrap" key={payment.payerName}><div className="personImg"><img src="image22-removebg-preview.png" alt="" width={20}/></div><b>{payment.payerName}</b> donated <b>₹{payment.Amount}</b>with a message "{payment.Message}"</div>

            ))}
          </div>
          </div>
        </div>

        <div className="paymentCard flex flex-col items-start h-[547px] max-sm:!w-[81%] max-[996px]:!w-[80%] max-lg:w-[44%] w-[40%]  py-9.75 bg-[#303841] rounded-md mt-11.75">
          {/* max-md:w-[78%] max-[1170px]:w-[44%] */}
         <div className="paymentHeading ml-8.75 text-[25px] font-bold">Make a Payment</div>
         <div className="paymentInputs w-full mt-3.75 ml-8.75 space-y-2">
       <input type="text" id='name' className='PaymentInput p-3.75 w-[84%] bg-gray-600 rounded-md' value={payerName} placeholder='Enter Name' onChange={(e)=>{setpayerName(e.target.value)}} />

       <input type="text" className='PaymentInput p-3.75 w-[84%] bg-gray-600 rounded-md' value={Message} placeholder='Enter Message' maxLength={32}  onChange={(e)=>{setMessage(e.target.value)}}/>

       <input type="number" className='PaymentInput p-3.75 w-[84%] bg-gray-600 rounded-md' placeholder='Enter Amount' value={payerAmount} onChange={(e)=>{setpayerAmount(e.target.value)}}/>
       <button id='payBtn' className='PayButton py-3 rounded-md ml-1.20 border-none bg-[radial-gradient(circle_farthest-corner_at_10%_20%,rgb(211_211_211)_0%,rgb(184_192_203)_51.2%,rgb(92_106_125)_100.1%)] w-[84%] font-semibold cursor-pointer' onClick={()=>{payHandler(),handleClick()}}  style={{background:Click?"purple":"radial-gradient(circle farthest-corner at 10% 20%,rgb(211 211 211) 0%,rgb(184 192 203) 51.2%,rgb(92 106 125) 100.1%)"}}>Pay</button>
         </div>
        <div className="payAmountBtns mt-6.25 ml-8.75 flex gap-2">
          <button id="pay10" className='PayShortcut cursor-pointer border-none rounded-md font-semibold bg-gray-600 p-3.25   ' onClick={()=>{setpayerAmount(10)}}>Pay ₹10</button>
           <button id="pay20" className='PayShortcut cursor-pointer border-none rounded-md font-semibold bg-gray-600 p-3.25   ' onClick={()=>{setpayerAmount(20)}}>Pay ₹20</button>
            <button id="pay30" className='PayShortcut cursor-pointer border-none rounded-md font-semibold bg-gray-600 p-3.25  ' onClick={()=>{setpayerAmount(30)}}>Pay ₹30</button>
        </div>
        </div>
        </div>

        <Footer/>
      </div>
      </>
    )
  }

export default page
