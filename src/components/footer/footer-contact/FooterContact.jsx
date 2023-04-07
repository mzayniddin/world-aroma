import "./FooterContact.scss";
import { FiPhone } from "react-icons/fi";

const FooterContact = () => {
    return (
        <div>
            <strong className="footer__list-title">Contact</strong>
            <ul className="footer__contact footer__list">
                <li className="footer__list-item">
                    <a href="tel:+998977993433">
                        <FiPhone /> +998 97 799 34 33
                    </a>
                </li>
                <li className="footer__list-item">
                    <a href="tel:+998 97 780 40 60">
                        <FiPhone /> +998 97 780 40 60
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterContact;
