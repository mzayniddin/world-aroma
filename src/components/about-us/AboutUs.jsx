import { useTranslation } from "react-i18next";
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
            </div>
        </section>
    );
};

export default AboutUs;
