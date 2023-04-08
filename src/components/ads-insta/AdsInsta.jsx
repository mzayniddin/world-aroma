import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
// IMAGES
import img1 from "../../assets/images/insta-img1.jpg";
import img2 from "../../assets/images/insta-img2.jpg";
import img3 from "../../assets/images/insta-img3.jpg";
import img4 from "../../assets/images/insta-img4.jpg";

// SCSS
import "./AdsInsta.scss";

const AdsInsta = () => {
    const images = [img1, img2, img4, img3];
    const { t } = useTranslation();
    return (
        <section className="ads-insta">
            <div className="container">
                <hr className="ads-insta__hr" />
                <ul className="ads-insta__imgs-list">
                    {images.map((img) => (
                        <li
                            key={uuidv4()}
                            className="ads-insta__imgs-list-item"
                        >
                            <img
                                className="ads-insta__imgs__img"
                                src={img}
                                alt="Flower"
                            />
                            <div className="insta-label">
                                <FaInstagram />
                                <p>
                                    {t("follow")}{" "}
                                    <a href="https://instagram.com">@florist</a>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AdsInsta;
