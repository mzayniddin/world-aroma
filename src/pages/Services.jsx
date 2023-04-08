// COMPONENTS

import Intro from "../components/intro/Intro";
import OurServices from "../components/our-services/OurServices";
import ServicesPrice from "../components/services-price/ServicesPrice";

const Services = () => {
    return (
        <main>
            <Intro title={"services"} />
            <OurServices/>
            <ServicesPrice/>
        </main>
    );
};

export default Services;
