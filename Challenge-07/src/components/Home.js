import CTABanner from "./CTABanner"
import FAQ from "./FAQ"
import Footer from "./Footer"
import NavbarHero from "./NavbarHero"
import OurServices from "./OurServices"
import Testimonial from "./Testimonial"
import WhyUs from "./WhyUs"

const Home = () => {
    return (
        <>
        <NavbarHero />
        <OurServices />
        <WhyUs />
        <Testimonial />
        <CTABanner />
        <FAQ />
        <Footer />
        </>
    )
}

export default Home;