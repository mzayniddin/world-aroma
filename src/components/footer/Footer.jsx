// IMAGE & ICONS
import logo from "../../assets/images/logo.svg";

// SCSS
import "./Footer.scss";
import FooterContact from "./footer-contact/FooterContact";

// COMPONENTS
import FooterNav from "./footer-nav/FooterNav";
import FooterRight from "./footer-right/FooterSocials";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__logo">
                        <img src={logo} alt="World Aroma logo" />
                    </div>
                    <div className="footer__middle">
                        <FooterNav />
                        <FooterContact />
                    </div>
                    <div className="footer__right">
                        <FooterRight />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
