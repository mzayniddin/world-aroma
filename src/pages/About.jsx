// COMPONENTS
import Intro from "../components/intro/Intro";
import AboutUs from "../components/about-us/AboutUs";
import OurServices from "../components/our-services/OurServices";

const About = () => {
    return (
        <main>
            <Intro title="about_us" />
            <AboutUs />
            <OurServices />
        </main>
    );
};

export default About;
