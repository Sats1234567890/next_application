import Button from "@/components/global/button"
import HeroImage from "@/components/global/hero"
import { NewsLetter } from "@/modules/components/contact/contact"
import { Footer } from "@/modules/components/footer/footer"
import TeamCards from "@/modules/components/teams/teams"
import Navbar from '@/components/header';

export default function Teams (){
    return (
        <>
        <div>
          <Navbar/>
            <HeroImage
                    imageSrc="/assets/slider/contact.jpg"
                    title="Bringing Nature’s Best from the Himalayas to the World"
                    height="400px"
                    className="mb-12 flex flex-col items-start justify-center" // Ensures vertical stacking
                  >
                    <p className="mb-4 text-lg block text-white font-bold max-w-2xl">
                      “organic farming, Nepalese origin, sustainability.”
                    </p>
                    <Button text={"Explore Our Product"} href={"/explore"} className="block" />
                  </HeroImage>
                  <TeamCards/>
                  <NewsLetter/>
                        <Footer/>
        </div>
        </>
    )
}