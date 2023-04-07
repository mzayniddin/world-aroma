import "./FooterSocials.scss";

// ICONS
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const FooterSocials = () => {
    return (
        <div className="footer__right-socials">
            <strong className="footer__list-title">Follow us</strong>
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
