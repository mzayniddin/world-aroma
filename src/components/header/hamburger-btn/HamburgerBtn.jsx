import { useState } from "react";
import "./HamburgerBtn.scss";

const HamburgerBtn = () => {
    const [hamburgerState, setHamburgerState] = useState();
    return (
        <button
            className={hamburgerState ? "hamburger active" : "hamburger"}
            onClick={() => setHamburgerState((state) => !state)}
        >
            <div className="hamburger-line"></div>
        </button>
    );
};

export default HamburgerBtn;
