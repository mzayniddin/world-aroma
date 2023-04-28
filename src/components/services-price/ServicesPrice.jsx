import { useTranslation } from "react-i18next";

// IMAGES
import img from "../../assets/images/services-img.jpg";

//SCSS
import "./ServicesPrice.scss";

const ServicesPrice = () => {
    const { t } = useTranslation();
    return (
        <section className="services">
            <div className="container">
                <div className="services__heading">
                    <span className="services__sub-title sub-title">
                        {t("from")} 60$ - 400$
                    </span>
                    <h2 className="services-title title">
                        {t("fresh")} {t("aromas")}
                    </h2>
                </div>
                <div className="services__content">
                    <img
                        src={img}
                        alt="Making aromas"
                        className="services__content-img"
                    />

                    <div className="services__content-text__wrapper">
                        <p className="services__content-text">
                            {t("for")}
                        </p>
                        <p className="services__content-text">
                            {t("free")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPrice;
