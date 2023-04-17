import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./MobileNav.scss";

const MobileNav = ({ isNavActive, setNavActive }) => {
    const { t } = useTranslation();

    const handleCloseNav = (e) => {
        if (e.target.classList.contains("mobile-nav__list-link")) {
            setNavActive(false);
        }
    };

    return (
        <div className={isNavActive ? "mobile-nav active" : "mobile-nav"}>
            <div className="mobile-nav__wrapper">
                <nav className="mobile-nav__nav">
                    <ul className="mobile-nav__list" onClick={handleCloseNav}>
                        <li className="mobile-nav__list-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "mobile-nav__list-link active"
                                        : "mobile-nav__list-link"
                                }
                                to={"/"}
                            >
                                {t("home")}
                            </NavLink>
                        </li>
                        
                        <li className="mobile-nav__list-item">
                            <NavLink
                                className="mobile-nav__list-link"
                                to={"/about"}
                            >
                                {t("about_us")}
                            </NavLink>
                        </li>

                        <li className="mobile-nav__list-item">
                            <NavLink
                                className="mobile-nav__list-link"
                                to={"/services"}
                            >
                                {t("services")}
                            </NavLink>
                        </li>

                        <li className="mobile-nav__list-item">
                            <NavLink
                                className="mobile-nav__list-link"
                                to={"/shop"}
                            >
                                {t("shop")}
                            </NavLink>
                        </li>
                        <li className="mobile-nav__list-item">
                            <NavLink
                                className="mobile-nav__list-link"
                                to={"/contact"}
                            >
                                {t("contact_us")}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="overlay"></div>
        </div>
    );
};

export default MobileNav;
