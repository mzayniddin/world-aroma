import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import "./OurAromas.scss";

import FlowerLabel from "../flower-label/FlowerLabel";

const OurAromas = ({ aromaImages }) => {
    const { t } = useTranslation();
    return (
        <div className="aromas">
            <div className="container">
                <div className="aromas-heading">
                    <span className="aromas-heading__sub-title sub-title">
                        {t("our_aromas")}
                    </span>
                    <h2 className="aromas-heading__title title">
                        {t("popular_aromas")}
                    </h2>
                </div>

                <ul className="aromas__list">
                    {aromaImages.map((img) => (
                        <li key={uuidv4()} className="aromas__list-item">
                            <img className="aromas__img" src={img} alt="" />
                            <FlowerLabel />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurAromas;
