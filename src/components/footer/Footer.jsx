
// IMAGE & ICONS
import logo from "../../assets/images/logo.svg";

// SCSS
import "./Footer.scss";

// COMPONENTS
import FooterNav from "./footer-nav/FooterNav";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={logo} alt="World Aroma logo" />
                </div>
                <div className="footer__middle">
                    <FooterNav />
                </div>
                <div className="footer__right">
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
