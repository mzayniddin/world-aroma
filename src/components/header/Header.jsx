// HOOKS
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

// SASS
import "./Header.scss";

// IMAGE
import logo from "../../assets/images/logo.svg";

// ICONS
import { FiChevronDown } from "react-icons/fi";

// COMPONENTS
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import MobileNav from "./mobile-nav/MobileNav";

const Header = () => {
    const langs = ["en", "ru"];
    const [activeLang, setActiveLang] = useState(localStorage.getItem("lang"));
    const [isLangListMouseOver, setLangListMouseOver] = useState(false);
    const [isNavActive, setNavActive] = useState(false);
    const { i18n, t } = useTranslation();

    const changeLang = (e) => {
        i18n.changeLanguage(e.target.textContent || "en");
        setActiveLang(localStorage.getItem("lang"));
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav__list">
                            <li className="header-nav__list-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "header-nav__list-link active"
                                            : "header-nav__list-link"
                                    }
                                    to={"/"}
                                >
                                    {t("home")}
                                </NavLink>
                            </li>
                            <li className="header-nav__list-item">
                                <NavLink
                                    className="header-nav__list-link"
                                    to={"/about"}
                                >
                                    {t("about_us")}
                                </NavLink>
                            </li>

                            <li className="header-nav__list-item">
                                <NavLink
                                    className="header-nav__list-link"
                                    to={"/services"}
                                >
                                    {t("services")}
                                </NavLink>
                            </li>

                            <li className="header-nav__list-item">
                                <NavLink
                                    className="header-nav__list-link"
                                    to={"/shop"}
                                >
                                    {t("shop")}
                                </NavLink>
                            </li>
                            <li className="header-nav__list-item">
                                <NavLink
                                    className="header-nav__list-link"
                                    to={"/contact"}
                                >
                                    {t("contact_us")}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__right">
                        <div
                            className="header__lang"
                            onMouseOver={() => {
                                setLangListMouseOver(true);
                            }}
                            onMouseLeave={() => {
                                setLangListMouseOver(false);
                            }}
                        >
                            <button className="header__lang-btn">
                                <span>{activeLang}</span>
                                <FiChevronDown className="down-arrow" />
                            </button>
                            <div className="header__lang-collection">
                                <ul
                                    onClick={() => {
                                        setLangListMouseOver(false);
                                    }}
                                    style={
                                        isLangListMouseOver
                                            ? { display: "block" }
                                            : { display: "none" }
                                    }
                                    className="header__lang-list"
                                >
                                    {langs.map((lang) => (
                                        <li
                                            className="header__lang-list__item"
                                            key={uuidv4()}
                                            onClick={changeLang}
                                        >
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <HamburgerBtn setNavActive={setNavActive} isNavActive={isNavActive} />
                    </div>
                    <MobileNav isNavActive={isNavActive} setNavActive={setNavActive} />
                </div>
            </div>
        </header>
    );
};

export default Header;
