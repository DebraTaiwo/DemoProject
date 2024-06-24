import {AAT, AMT, ATO, CookieText} from "./IndexFile"

const CookieSection = () => {
  return (
    <div className="mt-10 mb-10">
         <div className="flex flex-col md:flex-row mx-10 md:mx-20 sm: gap-5 md:gap-10 mt-20 relative">
           <div className="flex flex-col max-w-3xl">
            {CookieText.map((item, index)=>(
              <div key={index}>
                <h1 className="text-purple-800 text-4xl max-w-4xl tracking-tight" >{item.title}</h1>
                <p className="text-lg text-justify pt-3">{item.body}</p>
                <p className="text-lg text-justify">{item.para1}</p>
                <p className="text-lg text-justify pt-3">{item.para2}</p>
              </div>
            ))}
          </div> 
          {CookieText.map((item)=>(
            <div className="h-46 w-65 max-w-3xl">{item.image}</div>
          ))}         
        </div>
        <div className="mt-0 items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-green-300 mx-40 md:mx-80 mb-0 sm: mt-5 lg:mt-20 "></div>
        <div className="flex items-center justify-center">
        <div className="border rounded-lg h-40 mx-20 max-w-10xl max-auto bg-purple-900 place-content-center">
            <h2 className="text-sm md:text-3xl text-white px-10">
            <span className="text-green-300">Improve your </span> ad performance <br /><span className="text-green-300">with our</span> affilliate marketing software.</h2>
        </div>
        </div>
        <div className="w-20 h-20 rounded-full bg-green-300 mx-20 md:mx-60"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-center items-center mt-5 sm: mb-10">
          <div className="rounded-lg bg-blue-200 px-8 py-3"><h6>Track</h6></div>
          <div className="rounded-lg bg-red-100 px-4 py-3"><h6>Optimize</h6></div>
          <div className="rounded-lg bg-purple-400 px-2 py-3"><h6>Automate</h6></div>
        </div>
        <div className="flex flex-col md:flex-row mx-10 md:mx-20 sm: gap-5 md:gap-10">
          {AMT.map((item)=>(
            <div className="h-46 w-65 max-w-3xl">{item.image}</div>
          ))}
          <div className="flex flex-col max-w-3xl">
            {AMT.map((item, index)=>(
              <div key={index}>
                <h5 className="text-red-500 text-3xl" >{item.title}</h5>
                <p className="text-lg text-justify pt-3">{item.body}</p>
                <p className="text-lg text-justify">{item.para1}</p>
                <p className="text-lg text-justify pt-3">{item.para2}</p>
              </div>
            ))}
          </div>          
        </div> 
        <div className="flex flex-col md:flex-row mx-10 md:mx-20 sm: gap-5 md:gap-10 mt-20">
           <div className="flex flex-col max-w-3xl">
            {ATO.map((item, index)=>(
              <div key={index}>
                <h5 className="text-purple-800 text-3xl" >{item.title}</h5>
                <p className="text-lg text-justify pt-3">{item.body}</p>
                <p className="text-lg text-justify">{item.para1}</p>
                <p className="text-lg text-justify pt-3">{item.para2}</p>
              </div>
            ))}
          </div> 
          {ATO.map((item)=>(
            <div className="h-46 w-65 max-w-3xl">{item.image}</div>
          ))}         
        </div>
        <div className="flex flex-col md:flex-row mx-10 md:mx-20 sm: gap-5 md:gap-10 mt-20">
          {AAT.map((item)=>(
            <div className="h-46 w-65 max-w-3xl">{item.image}</div>
          ))}
          <div className="flex flex-col max-w-3xl">
            {AAT.map((item, index)=>(
              <div key={index}>
                <h5 className="text-red-500 text-3xl" >{item.title}</h5>
                <p className="text-lg text-justify pt-3">{item.body}</p>
                <p className="text-lg text-justify">{item.para1}</p>
                <p className="text-lg text-justify pt-3">{item.para2}</p>
              </div>
            ))}
          </div>          
        </div>     
        
    </div>
  )
}

export default CookieSection
