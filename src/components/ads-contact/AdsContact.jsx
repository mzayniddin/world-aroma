import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./AdsContact.scss";

const AdsContact = ({ bg }) => {
    const { t } = useTranslation();
    return (
        <section
            style={{
                backgroundImage: `url(${bg})`,
            }}
            className="ads-contact"
        >
            <div className="container">
                <div className="ads-contact__content">
                    <p className="ads-contact__subtitle">Custom Aromas</p>
                    <h3 className="ads-contact__title title">
                        Let our aromas make your product more perfect.
                    </h3>
                    <Link className="ads-contact__link" to="/contact">{t("contact_us")}</Link>
                </div>
            </div>
        </section>
    );
};

export default AdsContact;
