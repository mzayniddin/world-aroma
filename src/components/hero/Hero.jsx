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
import image1 from "../../assets/images/hero-img1.jpg";
import image2 from "../../assets/images/hero-img2.jpg";

const Hero = () => {
    const { t } = useTranslation();

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
                <SwiperSlide>
                    <img className="hero__swiper-img" src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="hero__swiper-img" src={image2} alt="" />
                </SwiperSlide>
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
