import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Praise from "./pages/Praise";
import Certifications from "./pages/Certifications";
import Moments from "./pages/Moments";
import CorporateClients from "./pages/CorporateClients";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/praise",
        element: <Praise />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/moments",
        element: <Moments />,
      },
      {
        path: "/corporate-clients",
        element: <CorporateClients />,
      },
      { path: "*", element: <>Not found</> },
    ],
  },
]);

export default router;
