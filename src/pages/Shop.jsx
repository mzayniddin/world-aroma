// COMPONENTS
import Intro from "../components/intro/Intro";
import OurAromas from "../components/our-aromas/OurAromas";
import AdsContact from "../components/ads-contact/AdsContact";
import AdsInsta from "../components/ads-insta/AdsInsta";

// AROMAS IMAGE
import aroma1 from "../assets/aromas_image/aroma1.png";
import aroma2 from "../assets/aromas_image/aroma2.png";
import aroma3 from "../assets/aromas_image/aroma3.png";
import aroma4 from "../assets/aromas_image/aroma4.png";
import aroma5 from "../assets/aromas_image/aroma5.png";
import aroma6 from "../assets/aromas_image/aroma6.png";
import aroma7 from "../assets/aromas_image/aroma7.png";
import aroma8 from "../assets/aromas_image/aroma8.png";

import bgAds from "../assets/images/shop-ads-bg.jpg";

const Shop = () => {
    const aromaImages = [
        aroma1,
        aroma2,
        aroma3,
        aroma5,
        aroma4,
        aroma6,
        aroma7,
        aroma8,
        aroma5,
        aroma2,
        aroma3,
        aroma1,
    ];

    return (
        <main>
            <Intro title={"shop"} />
            <OurAromas aromaImages={aromaImages} />
            <AdsContact bg={bgAds} />
            <AdsInsta />
        </main>
    );
};

export default Shop;
