// COMPONENTS
import Intro from "../components/intro/Intro";
import AboutUs from "../components/about-us/AboutUs";
import OurServices from "../components/our-services/OurServices";
import AdsContact from "../components/ads-contact/AdsContact";
import AdsInsta from "../components/ads-insta/AdsInsta";

// IMAGE
import adsContactImg from "../assets/images/about-ads-bg.jpg";

const About = () => {
    return (
        <main>
            <Intro title="about_us" />
            <AboutUs />
            <OurServices />
            <AdsContact bg={adsContactImg} />
            <AdsInsta />
        </main>
    );
};

export default About;
