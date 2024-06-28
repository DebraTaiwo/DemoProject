import React from 'react'
import {Dot} from 'lucide-react'
import thirdPics from "../assets/profile-pictures/thirdPics.jfif"
import secondPics from "../assets/profile-pictures/secondPics.jfif"
import fifthPics from "../assets/profile-pictures/fifthPics.jfif"

const AffiliateTrackingFour = () => {
  return (
    <div className='mx-20 flex flex-col gap-10 m-4 lg:m-6 md:m-5 sm:m-3 xl:m-8 2xl:m-10'>
      <div>
        <h4 className='font-bold text-purple-500 text-2xl sm:text-3xl lg:text-4xl mt-5  lg:mt-10 tracking wide'>Affiliate tracking made easy</h4>
      </div>
      <div>
        <p className='font-bold'>You are in good hands! Our team provides tons of useful educational content for affiliate marketing tracking:</p>
      </div>
      <div>
        <div className='flex items-center'>
          <span className='text-purple-200'aria-hidden="true">
            <Dot size={85} />
          </span>
          <span className='ml-2 text-lg'>Video tutorials</span>
        </div>

        <div className='flex items-center'>
          <span className='text-gray-200'aria-hidden="true"><Dot size={85} /></span>
          <span>Live webinars</span>
        </div>
        <div className='flex items-center'>
          <span className='text-pink-200'aria-hidden="true">
            <Dot size={85} />
          </span>
          <span>Dedicated support</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-200'aria-hidden="true">
            <Dot size={85} />
          </span>
          <span>1 on 1 onboarding</span>
        </div>
        <div className='flex items-center'>
          <span className='text-purple-200'aria-hidden="true">
            <Dot size={85} />
          </span>
          <span>Step-by-step guides</span>
        </div>
      </div>

    <div>
      <img src={thirdPics} />
      <img src={secondPics} />
      <img src={fifthPics} />
    </div>
    </div>
  )
}

export default AffiliateTrackingFour
