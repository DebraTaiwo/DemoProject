import image from '../assets/img1.png'
const HeroSection = () => {
  return (
    <div className='mt-20 mx-10 md:mx-20'>
      <div className="flex flex-col lg:flex-row gap-5">
      <div className='h-46 w-65 max-auto md:max-w-3xl'>
        <img className='' src={image} alt="Hero Image"/>
      </div>

      <div className='border rounded-lg bg-purple-900 max-w-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl lg:mt-[40px] lg:-ml-40 lg:h-[350px] xl:h-[400px] sm:mt-10 xl:mt-[150px]' >
        <div className='mx-5 md:mx-10 mt-10 max-w-md md:max-w-5xl lg:max-w-2xl xl:max-w-3xl lg:mx-10 xl:mx-10 xl:mt-20'>
        <h1 className='text-4xl mb-5 text-white font-bold'>
          The <span className='text-green-300'>all-in-one</span><br /> affiliate software
        </h1>
        <p className="text-lg text-white">
          Track, optimize & automate your advertising with affiliate tracking
          software recommended by digital marketers from around the globe!
        </p>
        <div className="flex items-center justify-center mt-10 mb-10">
                <button className="px-8 py-4 bg-green-300 font-bold rounded-lg">
                Get started
                </button></div>
        </div>
        </div>
      
      </div>

      <div className='bg-blue-50 mt-10 rounded-br-full mb-10 sm:h-[850px] md:h-60 lg:h-40'>
        <h3 className='text-lg mb-10 text-right mr-5 mt-5 font-bold'>Integrated with 40+ traffic sources</h3>
        <div className='flex flex-wrap gap-3 md:gap-5 mx-8 text-lg md:text-2xl font-bold'>
          <button className='bg-white py-2 px-4'>Facebook</button>
          <button className='bg-white py-3 px-6'>Google Ads</button>
          <button className='bg-white py-3 px-6'>Propeller</button>
          <button className='bg-white py-3 px-6'>Taboola</button>
        </div>

      </div>

    </div>
    
    
    
  );

};

export default HeroSection;