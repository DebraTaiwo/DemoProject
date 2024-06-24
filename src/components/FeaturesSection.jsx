import { Feature1, Feature2, Feature3, Feature4 } from "./IndexFile"

const FeaturesSection = () => {
  return (
    <div className="mx-10 md:mx-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-20">Features so good,<br />
        they will change the way you do <span className="text-purple-800">affiliate marketing</span>
        </h1>
        <div className="grid grid-row md:grid-cols-2 lg:grid-cols-4 gap-10 lg:mt-10">
        <div className="mt-5">
            {Feature1.map((items, index)=>(
                <div key={index}>
                    <div className="flex items-center justify-center"><div className="h-20 w-20 border bg-red-300 rounded-full">{items.icon}</div></div>
                    <div className="font-bold text-lg mt-5 text-center">{items.title}</div>
                    <div className="text-sm text-center mt-5">{items.label}</div>
                </div>
            ))}
        </div>
        <div className="mt-5">
            {Feature2.map((items, index)=>(
                <div key={index}>
                    <div className="flex items-center justify-center"><div className="h-20 w-20 border bg-green-300 rounded-full ">{items.icon}</div></div>
                    <div className="font-bold text-lg text-center mt-5">{items.title}</div>
                    <div className="text-sm text-center mt-5">{items.label}</div>
                </div>
            ))}
        </div>
        <div className="mt-5">
            {Feature3.map((items, index)=>(
                <div key={index}>
                    <div className="flex items-center justify-center"><div className="h-20 w-20 border bg-purple-300 rounded-full ">{items.icon}</div></div>
                    <div className="font-bold text-lg mt-5 text-center">{items.title}</div>
                    <div className="text-sm text-center mt-5">{items.label}</div>
                </div>
            ))}
        </div>
        <div className="mt-5">
            {Feature4.map((items, index)=>(
                <div key={index}>
                    <div className="flex items-center justify-center"><div className="h-20 w-20 border bg-green-300 rounded-full">{items.icon}</div></div>
                    <div className="font-bold text-lg mt-5 text-center">{items.title}</div>
                    <div className="text-sm text-center mt-5">{items.label}</div>
                </div>
            ))}
        </div>
        </div>
        <div className="mt-10">
            <p className="text-sm text-center">Voluum is much more than just a link tracking software</p>
            <div className="flex items-center justify-center mt-5">
                <button className="px-8 py-4 bg-green-300 rounded-lg">
                See all Features
                </button></div>
        </div>
      
    </div>
  )
}

export default FeaturesSection
