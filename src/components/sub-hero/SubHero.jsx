// COMPONENTS

import Advantage from "./advantage/Advantage";

// IMAGES
import aImg1 from "../../assets/ui-icons/advantage-img1.svg";
import aImg2 from "../../assets/ui-icons/advantage-img2.svg";
import aImg3 from "../../assets/ui-icons/advantage-img3.svg";
import aImg4 from "../../assets/ui-icons/advantage-img4.svg";

// SCSS
import "./SubHero.scss";

const SubHero = () => {
    const aImages = [aImg1, aImg2, aImg3, aImg4];
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
                    
                </div>
            </div>
        </div>
    );
};

export default SubHero;
