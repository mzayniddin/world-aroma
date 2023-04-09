import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <p className="not-found__title">
                    <strong>404</strong>
                </p>
                <strong className="not-found__msg">Page not found!</strong>
            </div>
        </div>
    );
};

export default NotFound;
