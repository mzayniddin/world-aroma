import { createBrowserRouter } from "react-router-dom";

import App from "../App";

// PAGES
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";

// COMPONENT
import NotFound from "../components/not-found/NotFound";
import Admin from "../pages/Admin";

const root = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
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
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
]);

export default root;
