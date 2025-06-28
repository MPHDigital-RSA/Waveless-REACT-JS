import Navbar from "../components/complex/Navbar"
import Hero from '../components/complex/Hero'
import Services from "../components/complex/Services"
import Testimonials from "../components/complex/Testimonials"
import Footer from "../components/complex/Footer"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
