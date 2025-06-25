import { createBrowserRouter } from "react-router-dom";
import Layout from '@components/layout';

import Welcome from "@pages/welcome";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Welcome/>},
            {path: "/news", element: <></>},
        ]
    },
])

export default router;