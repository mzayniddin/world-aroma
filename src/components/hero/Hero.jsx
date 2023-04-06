// HOOKS
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

// SCSS
import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.scss";

// IMAGES
import image1 from "../../assets/hero_images/hero-img1.jpg";
import image2 from "../../assets/hero_images/hero-img2.jpg";
import image3 from "../../assets/hero_images/hero-img3.jpg";
import image4 from "../../assets/hero_images/hero-img4.jpg";
import image5 from "../../assets/hero_images/hero-img5.jpg";
import image6 from "../../assets/hero_images/hero-img6.jpg";
import image7 from "../../assets/hero_images/hero-img7.jpg";

const Hero = () => {
    const { t } = useTranslation();
    const imagesArr = [image1, image2, image3, image4, image5, image6, image7];

    return (
        <section className="hero">
            <Swiper
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={2500}
                modules={[Autoplay, EffectFade]}
                className="hero__swiper"
            >
                {imagesArr.map((img) => (
                    <SwiperSlide>
                        <img className="hero__swiper-img" src={img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container">
                <div className="hero-content">
                    <span className="hero__sub-title">
                        Fresh Flower & Gift Shop
                    </span>
                    <h1 className="hero-title">
                        Making beautiful flowers a part of your life.
                    </h1>
                    <Link to="/shop" className="hero__link-shop">
                        {t("shop_now")}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
