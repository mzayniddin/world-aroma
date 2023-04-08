import { createBrowserRouter } from "react-router-dom";

import App from "../App";

// PAGES
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

const root = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "services",
                element: <Services />,
            },
        ],
    },
]);

export default root;
