import { useTranslation } from "react-i18next";
import "./FooterSocials.scss";

// ICONS
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const FooterSocials = () => {
    const { t } = useTranslation()
    return (
        <div className="footer__right-socials">
            <strong className="footer__list-title">{t("follow")}</strong>
            <ul className="footer__right__socials-list footer__list">
                <li className="footer__right__socials-list__item">
                    <a
                        className="footer__right__socials-link"
                        href="https://instagram.com"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                </li>
                <li className="footer__right__socials-list__item">
                    <a
                        className="footer__right__socials-link"
                        href="https://t.me/shuhrat_wt"
                        target="_blank"
                    >
                        <FaTelegramPlane />
                    </a>
                </li>
                <li className="footer__right__socials-list__item">
                    <a
                        className="footer__right__socials-link"
                        href="https://facebook.com"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterSocials;
