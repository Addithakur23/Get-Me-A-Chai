"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Dash_Navbar from '../components/Dash_Navbar'
import Navbar from '../components/Navbar'
const page = () => {
   const{data :session}=useSession()
   if(session){
  return (
    <>
    {session.user.email?<Dash_Navbar/>:"Hello no login"}
    <div className='aboutSec flex flex-col items-center '>
    <div className="about w-[60vw] max-[700px]:w-[68vw] max-[520px]:w-[82vw] flex flex-col mx-auto mt-4 ">
    <div className='aboutHeading text-2xl font-semibold mb-3'>
      About Get Me a Chai
    </div>
    <div className="aboutText mb-5">Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.</div>

    <div className="howWork text-xl font-semibold mb-2">How it Works</div>
    <div className="howWorkText mt-2 mb-5">
        <div className="twoSec flex gap-24 max-[1250px]:flex-col max-[1250px]:gap-[21px]">
            <div className="firstSec flex gap-1.5">
            <img src="/persons-removebg-preview.png" width={65} alt="" />
            <div className="collab text-lg font-semibold">Fan Want to collaborate
             <div className="collabText font-normal text-sm">Your fans are enthusiastic about collaborating with you on your projects.</div>
            </div>
            </div>

            <div className="secondSec flex gap-1.5">
              <img src="/gold_coin-removebg-preview.png" width={65} alt="" />
            <div className="collab text-lg font-semibold">Support Through Chai
             <div className="collabText font-normal text-sm">Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</div>
            </div>
            </div>
        </div>
    </div>

    <div className="benifitForCreators text-xl font-semibold mb-3">Benefits For Creators</div>
        <ul className='benifitForCreatorsText mb-5 list-disc ml-7'>
            <li>Direct financial support from your fanbase</li>
            <li>Engage with your fans on a more personal level</li>
            <li>Access to a platform tailored for creative projects</li>
        </ul>

    <div className="benifitForFans text-xl font-semibold mb-3">Benefits for Fans</div>
     <ul className='benifitForFansText mb-5 list-disc ml-7'>
            <li> Directly contribute to the success of your favorite creators</li>
            <li>Exclusive rewards and perks for supporting creators</li>
            <li>Be part of the creative process and connect with creators</li>
        </ul>

           <div className="benifitofCollaboration text-xl font-semibold mb-3">Benefits of Collaboration</div>
     <ul className='benifitofCollaborationText mb-5 list-disc ml-7'>
            <li>  Unlock new opportunities through collaboration with fellow creators</li>
            <li>Expand your network and reach a wider audience</li>
            <li>Combine skills and resources to create innovative projects</li>
        </ul>

        <div className="communityEngage text-xl font-semibold mb-3">Community Engagement</div>
          <ul className='communityEngageText mb-5 list-disc ml-7'>
            <li>Connect with a supportive community of like-minded individuals</li>
            <li>Receive valuable feedback and encouragement from peers</li>
            <li>Participate in discussions and events centered around your interests</li>
        </ul>

        </div>
        </div>
    </>
  )
}
}

export default page
