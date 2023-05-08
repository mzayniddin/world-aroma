// HOOKS
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// IMAGE
import aboutImg from "../../assets/images/about-img.jpg";

// SCSS
import "./AboutUs.scss";

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <section className="about">
            <div className="container">
                <div className="about-top">
                    <div className="about-heading">
                        <span className="sub-title about-heading__sub-title">
                            {t("about_us")}
                        </span>
                        <h2 className="title about-heading__title">
                            {t("we provide all kinds of fresh aromas and fragrance")}
                        </h2>
                    </div>
                    <div className="about-top__text">
                        <p>
                            {t("for")}
                        </p>
                    </div>
                </div>
                <div className="about-body">
                    <div className="about-body__img">
                        <img
                            src={aboutImg}
                            width={605}
                            height={535}
                            alt="Aroma Flower"
                        />
                    </div>
                    <div className="about-body__content">
                        <span className="about-body__content-sub-title sub-title">
                            {t("slow")}
                        </span>
                        <h2 className="about-body__content-title title">
                            {t("dried")}
                        </h2>
                        <p className="about-body__content-text">
                            {t("this")}
                        </p>
                        <Link
                            to="/contact"
                            className="about-body__content-link"
                        >
                            {t("contact_us")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
