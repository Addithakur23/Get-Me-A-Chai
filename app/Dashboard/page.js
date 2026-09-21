"use client"
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Dash_Navbar from '../components/Dash_Navbar.js'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { LINE_Seed_JP } from 'next/font/google'
import Account_Hamburger from '../components/Account_Hamburger.js'

const page = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Username, setUsername] = useState("")
  const [Profile_picture, setProfile_picture] = useState("")
  const [Cover_picture, setCover_picture] = useState("/roman 2.jpg")
  const [Razorpay_ID, setRazorpay_ID] = useState("rzp_test_TIEYfQ51RC8bFC")
  const [Razorpay_secret, setRazorpay_secret] = useState("")
  const [Success, setSuccess] = useState(false)
  const [Change, setChange] = useState(false)
    const [Provider, setProvider] = useState("")
          const [ProviderAccountID, setProviderAccountID] = useState("")
  const{data :session}=useSession()
  
  const handleFocus = (e) => {
    e.target.select()
  }    
    useEffect(() => {
      
        async function loadUser() {
          const response=await fetch("/api/user")
          const user=await response.json()
        setName(user.Name ?? session.user.name);
setEmail(user.Email ?? session.user?.email ?? "pundhiraditya428@gmail.com");
setUsername(user.Username ?? session.user.name);
setProfile_picture(user.Profile_picture ?? session.user.image);
setCover_picture(user.Cover_picture ?? "/roman 2.jpg");
setRazorpay_ID(user.Razorpay?.ID ?? "rzp_test_TIEYfQ51RC8bFC");
setRazorpay_secret(user.Razorpay?.secret ??"nG7fynxN6LxwNbqLW2qZvkMN");
        }
        if(session){
         setProvider(session.provider)
         setProviderAccountID(session.providerAccountId)
          loadUser()
          
        }
     
  }, [session])  
    
    async function createUser() {
      const response=await fetch("/api/user",{method:"POST", headers:{"Content-type":"application/json"},body:JSON.stringify({Name,Email,Username,Profile_picture,Cover_picture,Provider,ProviderAccountID,Razorpay_ID,Razorpay_secret})})
      if(response.status==400){
        alert("User already exists")
        return
      }
      if(response.ok){
        alert("Data Saved Successfully!!!")
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
          
        }, 1500);
      }
      const data=await response.json()
    }

    async function updateUser() {
      const response=await fetch("/api/user",{method:"PUT", headers:{"Content-type":"application/json"},body:JSON.stringify({Name,Email,Username,Profile_picture,Cover_picture,Razorpay_ID,Razorpay_secret})})
      if(response.ok){
        alert("Data Updated Successfully!!!")
      }
      const data=await response.json()
    }

    return (
   <>
       <Dash_Navbar/>
       
    <div className='dashboardPage flex flex-col items-center'>
      <div className="dashboardText text-center text-3xl font-bold mt-9.5">Welcome to your Dashboard</div>
      <div className="inputs flex font-medium flex-col w-[47%] my-6.25 placeholder:text-white max-lg:w-[55%] max-md:w-[65%] max-sm:w-[80%]">
       <div className="name">Name</div>
       <input type="text" id='name' className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5' value={Name} onChange={(e)=>{setName(e.target.value) ,setChange(true)}}  onFocus={handleFocus}/>

       <div className="email">Email</div>
       <input type="email" className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5'  value={Email} onChange={(e)=>{setEmail(e.target.value) ,setChange(true)}} onFocus={handleFocus}/>

       <div className="username">Username</div>
       <input type="text" className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5'  value={Username} onChange={(e)=>{setUsername(e.target.value) ,setChange(true)}} onFocus={handleFocus}/>

         <div className="profilePicture">Profile Picture</div>
       <input type="text" className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5'  value={Profile_picture} onChange={(e)=>{setProfile_picture(e.target.value) ,setChange(true)}} onFocus={handleFocus}/>

         <div className="coverPicture">Cover Picture</div>
       <input type="text" className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5' value={Cover_picture} onChange={(e)=>{setCover_picture(e.target.value),setChange(true)}} onFocus={handleFocus}/>

         <div className="razorpayId">Razorpay Id</div>
       <input type="text" className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5'  value={Razorpay_ID} onChange={(e)=>{setRazorpay_ID(e.target.value), setChange(true)}} onFocus={handleFocus}/>

         <div className="razorpaySecret">Razorpay Secret</div>
       <input type="text" className='input flex items-center my-2 rounded-[10px] border-none bg-gray-700 p-2.5' value={Razorpay_secret} onChange={(e)=>{setRazorpay_secret(e.target.value),setChange(true)}} onFocus={handleFocus}/>
      <button id='saveBtn' className='saveButton text-center cursor-pointer w-full font-semibold rounded-[10px] border-none bg-blue-700 p-2.5 mt-3' onClick={Change?updateUser:createUser}>Save</button>
      {Success?<div className="saveAlert text-green-400 mt-1.25 text-center">Data Saved Successfully!!!</div>:""}
      </div>
    </div>
    </>
  )

}


export default page
