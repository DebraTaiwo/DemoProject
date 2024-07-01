import React from 'react'
import video from "../assets/video.png"
import bimg1 from "../assets/profile-pictures/bimg1.png"
import bimg2 from "../assets/profile-pictures/bimg2.png"
import bimg4 from "../assets/profile-pictures/bimg4.png"
import bimg3 from "../assets/profile-pictures/bimg3.png"

const AffiliateSction = () => {
  return (
    <div className='mt-10'>
        <div className='flex flex-col md:flex-row gap-10 mx-10 md:mx-20'>
            <div className='max-w-xl'>
                <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-5'>An affiliate tracking platform made for affiliates, <span className='text-red-500'>by affiliates</span></h4>
                <p className='text-lg'>Watch a short video about an affiliate marketer who has inspired a team of 100+ creative minds to develop a truly game-changing ad tracking software.</p>
            </div>
            <div><img className='h-46 w-65' src={video} alt="video" />
            <div className='justify-center mt-5 lg:mt-20 lg:mx-30'><h4 className='text-3xl max-w-2xl font-bold justify-end'>We're a part of the affiliate community <span className='text-purple-800'>since 2015!</span> </h4></div>
            </div>
            
        </div>
      <div>
        <div className='border rounded-tl-full h-20 w-20 md:h-40 md:w-40 mx-10 md:mx-20 mt-5 bg-green-300'></div>
        <div className="border-none rounded-r-full h-[850px] md:h-[500px] max-w-5xl lg:h-[350px] mx-10 md:mx-20 bg-blue-50 place-content-center">
        <div className='grid grid-row md:grid-col gap-10 mx-10'>
            <div className='flex flex-wrap gap-5 font-bold'>
            <h1 className='text-2xl font-bold'>Official Tracking <br />Partner of</h1>
            <button className='py-3 px-6 bg-white'>ClickBank</button>
            <button className='py-3 px-6 bg-white'>Exoclick</button>
            <button className='py-3 px-6 bg-white'>Propeller</button>
            <button className='py-3 px-6 bg-white'>Mobidea</button>
            </div>
            <div className='flex flex-wrap gap-5 sm:mb-30 font-bold'>
            <h1 className='text-2xl lg:mr-20 font-bold'>Find us on</h1>
            <button className='py-3 px-11 bg-white'>Smt</button>
            <button className='py-3 px-6 bg-white'>AffiliateFix</button>
            <button className='py-3 px-6 bg-white'>OffLIFT</button>
            <button className='py-3 px-5 bg-white'>ADSOCIETY</button>
            </div>
        </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap gap-5 mt-[40px] pt-10 md:mt-20'>
        <div className='mx-10 md:mx-20 max-w-xl'>
            <h1 className='max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-purple-800'>Affiliate tracking
            <br /> made easy</h1>
            <p className='text-lg'>You are in good hands</p>
            <p className='text-lg'>Our team provides tons of useful educational <br />
            content for affiliate marketing tracking:</p>
            <ul className='mt-10 space-y-5 text-lg'>
                <li className='flex items-center'>
                    <div className='h-8 w-8 border rounded-full bg-purple-300 mr-10'></div>
                    Video Tutorials
                </li>
                <li className='flex items-center'>
                    <div className='h-8 w-8 border rounded-full bg-blue-100 mr-10'></div>
                    Live Webinars
                </li>
                <li className='flex items-center'>
                    <div className='h-8 w-8 border rounded-full bg-red-200 mr-10'></div>
                    Dedicated support
                </li>
                <li className='flex items-center'>
                    <div className='h-8 w-8 border rounded-full bg-green-100 mr-10'></div>
                    1 on 1 onboarding
                </li>
                <li className='flex items-center'>
                    <div className='h-8 w-8 border rounded-full bg-purple-300 mr-10'></div>
                    Step by step guides
                </li>
            </ul>
        </div>
        <div className='grid grid-row md:grid-cols-2 max-w-2xl flex-wrap gap-3 sm:mx-10 mb-10'>
            <div className='mt-20 mx-10'>
                <img className='border-green-300 rounded-lg border-b-purple-800 border-r-purple-800 border-[2px]' src={bimg2} alt="image" />
            </div>
            <div className='mx-10'>
                <img className='border-green-300 rounded-lg border-b-purple-800 border-r-purple-800 border-[2px]' src={bimg1} alt="image" />
            </div>
            <div className='sm:mt-20 mx-10'>
                <img className='border-green-300 rounded-lg border-b-purple-800 border-r-purple-800 border-[2px]' src={bimg3} alt="image" />
            </div>
            <div className='mx-10'>
                <img className='border-green-300 rounded-lg border-b-purple-800 border-r-purple-800 border-[2px]' src={bimg4} alt="image" />
            </div>
        </div>
        
      </div>
      <div className='mt-20 mb-10 mx-10'>
      <div className='flex items-center justify-center text-center'>
            <div className='rounded-[40px] max-w-8xl border-purple-800 border-t-0  border-[5px]'>
                <div className='mt-10 mx-5 lg:mx-20 my-10 items-center justify-center'>
                <h1 className='text-2xl'>Control all your advertising <br /> 
                from just one platform!</h1>
                <div className="flex items-center justify-center mt-5 font-bold">
                <button className="px-8 py-4 bg-green-300 rounded-lg">
                Sign up now
                </button></div>
                       </div>            
            </div>
            </div>
        
      </div>
      </div>
  )
}

export default AffiliateSction
