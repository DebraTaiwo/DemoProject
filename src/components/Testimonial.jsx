import React from 'react'
import img1 from '../assets/profile-pictures/img1.png'
import img2 from '../assets/profile-pictures/img2.png'
import img3 from '../assets/profile-pictures/img3.png'
import img4 from '../assets/profile-pictures/img4.png'
import img5 from '../assets/profile-pictures/img5.png'
import img6 from '../assets/profile-pictures/img6.png'

const Testimonial = () => {
  return (
    <div className='mx-10 md:mx-20'>
      <h3 className='text-2xl sm:text-3xl lg:text-4xl text-center mt-20 justify-between items-center'>Testimonial</h3>
      <div className='grid grid-rows-3 lg:grid-flow-col gap-5 mt-10 lg:mt-20'>
        <div className='flex items-center justify-center'>
            <div className='lg:ml-20'><img src={img1} alt="image" /></div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='lg:mr-40'><img src={img2} alt="image" /></div>
        </div>       
        <div className='flex items-center justify-center'>
            <div className='lg:ml-20'><img src={img3} alt="image" /></div>
        </div>
        
        <div className='grid  gap-4 row-span-3'>
            <div className='flex items-center justify-center text-center max-w-3xl'>
            <div className='row-start-2 border rounded-[80px] border-b-purple-800 border-t-teal-300 border-t-[10px] border-b-[10px]'>
                <div className='mt-10 mx-5 lg:mx-20 my-10 items-center justify-center'>
                <p>Voluum contributed massively to my business growth - from $ 1M a year to $ 3M. It’s intuitive and user-friendly, giving me the ability to manage large sets of advertising data.</p>
                <div className='flex items-center justify-center'>
                <p className='m-5'><img className='h-20 w-20' src={img4} alt="image"/></p>
                </div>
                <p className='text-lg'>John Crestani</p>
                <p className='text-sm'>Affiliate Marketing Expert</p>
                </div>            
            </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='lg:ml-10 lg:ml-25'><img  src={img4} alt="image" /></div>
        </div>
        <div className='flex items-center justify-center'>
        <div className='lg:ml-40'><img src={img5} alt="image" /></div>
        </div>        
        <div className='flex items-center justify-center'>
        <div className='lg:mr-10'><img src={img6} alt="image" /></div>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
