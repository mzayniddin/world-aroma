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
                            We provide all kinds of fresh flower services
                        </h2>
                    </div>
                    <div className="about-top__text">
                        <p>
                            For Heather Henson, of Boreal Blooms in Cold Lake,
                            Alberta, Canada, growing flowers that can be dried
                            and incorporated into late fall and winter floral
                            arrangements has been a game-changer. During her
                            growing season, this farmer-florist relies on a
                            vivid palette of annuals, perennials and ornamental
                            grasses to supply her studio.
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
                            SLOW FLOWERS’ FLORAL INSIGHTS
                        </span>
                        <h2 className="about-body__content-title title">
                            Dried flowers are having a renaissance
                        </h2>
                        <p className="about-body__content-text">
                            This awareness has been stimulated by sustainable
                            sourcing practices and the desire on the part of
                            North American flower growers to “extend the season”
                            beyond the last frost.
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
