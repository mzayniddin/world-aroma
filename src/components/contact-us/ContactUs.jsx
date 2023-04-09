import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "./ContactUs.scss";
import "react-phone-number-input/style.css";

const ContactUs = () => {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState();
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__left">
                    <h2 className="contact-title">{t("contact_us")}</h2>
                    <form className="contact__form">
                        <div className="contact__input">
                            <label htmlFor="fullname">{t("fullname")}</label>
                            <input id="fullname" type="text" />
                        </div>
                        <div className="contact__input">
                            <label htmlFor="tel">{t("fullname")}</label>
                            <input id="tel" type="text" />
                        </div>
                        <div className="contact__input">
                            <label htmlFor="tel"></label>
                            <PhoneInput
                                id="tel"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                            />
                        </div>
                        <div className="contact__input">
                            <label htmlFor="email"></label>
                            <input
                                id="email"
                                type="email"
                                pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g"
                            />
                        </div>
                        <div className="contact__input">
                            <label htmlFor="message"></label>
                            <textarea
                                id="message"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="contact__right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.5371501692448!2d69.28045697573528!3d41.31105358352224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQotC10LzRg9GA0LAg0JDQvNC40YDQsA!5e0!3m2!1sru!2s!4v1681004599585!5m2!1sru!2s"
                        width="400"
                        height="300"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
