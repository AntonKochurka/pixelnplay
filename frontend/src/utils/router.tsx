import { createBrowserRouter } from "react-router-dom";
import Layout from '@components/layout';

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <></>},
            {path: "/news", element: <></>},
        ]
    },
])

export default router;