import { Accordion } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import FAQ from "./components/FAQ"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Education from "./components/Education"
import HeroSection from "./components/HeroSection"

function App() {


  return (
    <>
    <Header/>
    <HeroSection/>
    <Resume/>
    <Education/>
    <Portfolio/>
    <Testimonials/>
    <Services/>
    <FAQ/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
