import firstPics from "../assets/profile-pictures/firstPics.jfif"

const Affiliate = () => {
  return (
    <div className="flex flex-nowrap items-center justify-center md:flex-wrap md:justify-start mx-20">
      <div>
      <h4 className="text-lg">An affiliate tracking platform made for affiliates <span className="text-orange-500">by affiliates</span></h4>

      <p>Watch a short video about an affiliate marketer who has inspired a team of 100+ creative minds to develop a truly game-changing ad tracking software</p>
      </div>
      
      <img className="w-1/2 h-64 md:w-64" src={firstPics} />
      
    </div>
  ) 
}

export default Affiliate
