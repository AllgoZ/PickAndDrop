import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Fleet from './components/Fleet'
import PackersMovers from './components/PackersMovers'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Fleet />
      <PackersMovers />
      <Testimonials />
      <ServiceAreas />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}
