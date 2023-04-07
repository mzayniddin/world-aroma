import { useTranslation } from "react-i18next";
import "./Intro.scss";

const Intro = ({ title }) => {
    const { t } = useTranslation();
    return (
        <section className="intro">
            <div className="container">
                <h2 className="intro-title title"> {t(title)}</h2>
                <span className="intro__sub-title">
                    Fresh Flowers Aroma Shop
                </span>
            </div>
        </section>
    );
};

export default Intro;
