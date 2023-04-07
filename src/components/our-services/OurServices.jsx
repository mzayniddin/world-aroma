import { useTranslation } from "react-i18next";
import ServiceType from "../service-type/ServiceType";
import "./OurServices.scss";

const OurServices = () => {
    const { t } = useTranslation();
    return (
        <section className="our-services">
            <div className="container">
                <div className="our-services__heading">
                    <span className="our-services__sub-title sub-title">
                        {t("our")} {t("services")}
                    </span>
                    <h2 className="our-services__title title">
                        World aromas services
                    </h2>
                </div>
                <div className="our-services__type-wripper">
                    <ServiceType />
                    <ServiceType />
                    <ServiceType />
                </div>
            </div>
        </section>
    );
};

export default OurServices;
