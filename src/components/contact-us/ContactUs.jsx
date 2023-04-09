import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

// STYLE
import "./ContactUs.scss";
import "react-phone-number-input/style.css";

// BASE URL
const BASE_URL = "https://alltravel.uz/api/apps";

const ContactUs = () => {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const RESPONSE = await axios.post(`${BASE_URL}/client/create/`, {
            fullname: fullName,
            phone: phoneNumber,
            email: email,
            comment: message,
        });

        if (RESPONSE.status === 201) {
            alert("Your message has been sent successfully");
        } else {
            alert("Something went wrong! Please, try again.");
        }
    };

    return (
        <section className="contact">
            <div className="container">
                <h2 className="contact-title title">{t("contact_us")}</h2>
                <div className="contact-inner">
                    <div className="contact__left">
                        <form onSubmit={handleSubmit} className="contact__form">
                            <div className="contact__input">
                                <label htmlFor="fullname">
                                    {t("fullname")}
                                </label>
                                <input
                                    id="fullname"
                                    type="text"
                                    placeholder={t("fullname")}
                                    required
                                    value={fullName}
                                    minLength={2}
                                    onChange={(e) => {
                                        setFullName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="contact__input">
                                <label htmlFor="email">
                                    {t("email_address")}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    placeholder={t("email_address")}
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="contact__input">
                                <label htmlFor="message">{t("message")}</label>
                                <textarea
                                    placeholder={t("message")}
                                    id="message"
                                    cols="30"
                                    rows="4"
                                    required
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <div className="contact__input">
                                <label htmlFor="tel">{t("telephone")}</label>
                                <PhoneInput
                                    defaultCountry="UZ"
                                    id="tel"
                                    placeholder={t("telephone")}
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="contact__form-submit"
                            >
                                {t("submit")}
                            </button>
                        </form>
                    </div>
                    <div className="contact__right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.5371501692448!2d69.28045697573528!3d41.31105358352224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQotC10LzRg9GA0LAg0JDQvNC40YDQsA!5e0!3m2!1sru!2s!4v1681004599585!5m2!1sru!2s"
                            width="400"
                            height="300"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
