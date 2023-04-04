import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="hero">
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
