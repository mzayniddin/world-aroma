// COMPONENTS
import AboutUs from "../components/about-us/AboutUs";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import SubHero from "../components/sub-hero/SubHero";
import OurAromas from "../components/our-aromas/OurAromas";

// AROMAS IMAGE
import aroma1 from "../assets/aromas_image/aroma1.png";
import aroma2 from "../assets/aromas_image/aroma2.png";
import aroma3 from "../assets/aromas_image/aroma3.png";
import aroma4 from "../assets/aromas_image/aroma4.png";
import aroma5 from "../assets/aromas_image/aroma5.png";
import aroma6 from "../assets/aromas_image/aroma6.png";
import aroma7 from "../assets/aromas_image/aroma7.png";
import aroma8 from "../assets/aromas_image/aroma8.png";

export default function Home() {
    const aromaImages = [
        aroma1,
        aroma2,
        aroma3,
        aroma5,
        aroma4,
        aroma6,
        aroma7,
        aroma8,
    ];
    return (
        <div>
            <Header />
            <Hero />
            <SubHero />
            <AboutUs />
            <OurAromas aromaImages={aromaImages} />
        </div>
    );
}
