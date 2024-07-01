import AffiliateSction from './components/AffiliateSction'
import CookieSection from './components/CookieSection'
import FeaturesSection from './components/FeaturesSection'
import FooterSection from './components/FooterSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    <CookieSection />
    <FeaturesSection />
    <Testimonial/>
    <AffiliateSction />
    <FooterSection />
    </div>
  )
}

export default App
