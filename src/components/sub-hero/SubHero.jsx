// COMPONENTS

import Advantage from "./advantage/Advantage";

// IMAGES
import aImg1 from "../../assets/ui-icons/advantage-img1.svg";
import aImg2 from "../../assets/ui-icons/advantage-img2.svg";
import aImg3 from "../../assets/ui-icons/advantage-img3.svg";
import aImg4 from "../../assets/ui-icons/advantage-img4.svg";

import sImg1 from "../../assets/images/sub-hero-img1.jpg";
import sImg2 from "../../assets/images/sub-hero-img2.jpg";
import sImg3 from "../../assets/images/sub-hero-img3.jpg";
import sImg4 from "../../assets/images/sub-hero-img4.jpg";

// SCSS
import "./SubHero.scss";

const SubHero = () => {
    const aImages = [aImg1, aImg2, aImg3, aImg4];
    const subHeroImages = [sImg1, sImg2, sImg4, sImg3];
    return (
        <div className="sub-hero">
            <div className="container">
                <div className="sub-hero__advantages__wrapper">
                    {aImages.map((image) => (
                        <Advantage
                            img={image}
                            title="100% Freshness"
                            text="Most people are unaware of the less common flower"
                        />
                    ))}
                </div>
                <div className="sub-hero__images-wrapper">
                    {subHeroImages.map((image) => (
                        <div className="sub-hero__img-wrap">
                            <img src={image} alt="Flowers" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubHero;
