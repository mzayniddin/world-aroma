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

const Header = () => {
    const langs = ["en", "ru"];
    const [activeLang, setActiveLang] = useState(localStorage.getItem("lang"));
    const [isLangListMouseOver, setLangListMouseOver] = useState(false);

    const { i18n, t } = useTranslation();

    const changeLang = (e) => {
        i18n.changeLanguage(e.target.textContent || "en");
        setActiveLang(localStorage.getItem("lang"));
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav__list">
                        <li className="header-nav__list-item">
                            <NavLink className="header-nav__list-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink className="header-nav__list-link" to="/">
                                About Us
                            </NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink className="header-nav__list-link" to="/">
                                Services
                            </NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink className="header-nav__list-link" to="/">
                                Shop
                            </NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink className="header-nav__list-link" to="/">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div
                    className="lang"
                    onMouseOver={() => {
                        setLangListMouseOver(true);
                    }}
                    onMouseLeave={() => {
                        setLangListMouseOver(false);
                    }}
                >
                    <button className="lang-btn">
                        <span>{localStorage.getItem("lang")}</span>
                        <FiChevronDown className="down-arrow" />
                    </button>
                    <div className="lang-collection">
                        <ul
                            onClick={() => {
                                setLangListMouseOver(false);
                            }}
                            style={
                                isLangListMouseOver
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                            className="lang-list nav__sub-list"
                        >
                            {langs.map((lang) => (
                                <li
                                    style={
                                        activeLang === lang
                                            ? { display: "none" }
                                            : null
                                    }
                                    key={uuidv4()}
                                    onClick={changeLang}
                                >
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
