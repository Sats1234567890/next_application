import HeroImage from "@/components/global/hero"
import Navbar from "@/components/header"
import { ContactSection } from "@/modules/components/contact/contact-us"
import ContactForm from "@/modules/components/contact/contactForm"
import { Iframe } from "@/modules/components/contact/iframe"
import { Footer } from "@/modules/components/footer/footer"
export default function ContactPage(){
    return (
        <>
        <div className="bg-gray-200">
            <Navbar/>
        <div className="max-h-screen flex items-center justify-center bg-gray-100">
            <HeroImage imageSrc="/assets/slider/contact.jpg" title="Get In Touch" height="400px" />
        </div>
        <div>
            <ContactSection/>
        </div>
        <ContactForm/>
        <Iframe/>
        <Footer/>
        </div>
        </>

    )
}