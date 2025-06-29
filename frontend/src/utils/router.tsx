import { createBrowserRouter } from "react-router-dom";
import Layout from '@components/layout';

import Welcome from "@pages/welcome";
import Register from "@src/pages/auth/register";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Welcome/>},
            {path: "news", element: <></>},
            {
                path: "auth",
                children: [
                    {path: "register", element: <Register/>},
                ]
            }
        ]
    },
])

export default router;