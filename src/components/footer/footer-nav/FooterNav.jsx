import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterNav = () => {
    const { t } = useTranslation();
    return (
        <nav className="footer__nav">
            <strong className="footer__list-title">Navigation</strong>
            <ul className="footer__nav-list footer__list">
                <li className="footer__list-item">
                    <Link to="/" className="footer__nav-link footer__link">
                        {t("home")}
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link to="/about" className="footer__nav-link footer__link">
                        {t("about_us")}
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link
                        to="/service"
                        className="footer__nav-link footer__link"
                    >
                        {t("service")}
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link to="/shop" className="footer__nav-link footer__link">
                        {t("shop")}
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link
                        to="/contact"
                        className="footer__nav-link footer__link"
                    >
                        {t("contact_us")}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;
