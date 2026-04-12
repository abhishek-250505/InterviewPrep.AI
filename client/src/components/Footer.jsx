import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-[#921BFA] flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='w-full max-w-6xl bg-gray-200 rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center'>
        <div className='flex justify-center items-center gap-3 mb-3'>
            <div className="bg-linear-to-r from-[#9319FA] to-[#5937F7] text-white p-2 rounded-lg">
            {"</>"}
          </div>
          <h1 className="font-semibold hidden md:block text-lg text-black">
            InterviewPrep.AI
          </h1>
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto'>
  AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>
        <p className='mt-5 text-gray-800 text-[14px]'>©{new Date().getFullYear()} InterviewPrepAI. All rights reserved.</p>


      </div>
    </div>
  )
}

export default Footer
