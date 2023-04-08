// COMPONENTS
import Intro from "../components/intro/Intro";
import OurServices from "../components/our-services/OurServices";
import ServicesPrice from "../components/services-price/ServicesPrice";
import AdsContact from "../components/ads-contact/AdsContact";
import AdsInsta from "../components/ads-insta/AdsInsta";

// IMAGE
import bgAds from "../assets/images/service-ads-bg.jpg";

const Services = () => {
    return (
        <main>
            <Intro title={"services"} />
            <OurServices />
            <ServicesPrice />
            <AdsContact bg={bgAds} />
            <AdsInsta />
        </main>
    );
};

export default Services;
