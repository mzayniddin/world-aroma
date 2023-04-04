import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="hero__sub-title">
                        Fresh Flower & Gift Shop
                    </span>
                    <h1 className="hero-title">
                        Making beautiful flowers a part of your life.
                    </h1>
                    <button className="hero__btn-shop">Shop now</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
