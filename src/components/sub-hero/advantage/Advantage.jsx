import "./Advantage.scss";

const Advantage = ({ img, title, text }) => {
    return (
        <div className="advantage__card">
            <div className="advantage__card-img">
                <img width={45} height={45} src={img} alt="our advantage" />
            </div>
            <div className="advantage__card-content">
                <strong className="advantage__card-title">{title}</strong>
                <p className="advantage__card-text">{text}</p>
            </div>
        </div>
    );
};

export default Advantage;
