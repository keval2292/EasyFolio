import { Accordion } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import FAQ from "./components/FAQ"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

function App() {


  return (
    <>
    <Header/>
    <Testimonials/>
    <Services/>
    <FAQ/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
