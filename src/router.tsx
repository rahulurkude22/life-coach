import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Praise from "./pages/Praise";
import Certifications from "./pages/Certifications";
import Moments from "./pages/Moments";
import CorporateClients from "./pages/CorporateClients";

import OnlineWorkshops from "./pages/OnlineWorkshops";
import OnlineWorkshop from "./pages/OnlineWorkshop";

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
        path: "/online-workshops",
        element: <OnlineWorkshops />,
      },
      {
        path: "/offline-events",
        element: <Navigate to="/online-workshops" replace />,
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
  {
    path: "/online-workshop",
    element: <OnlineWorkshop />,
  },
  {
    path: "/onlineworkshop",
    element: <OnlineWorkshop />,
  },
  {
    path: "/offline-workshop",
    element: <Navigate to="/online-workshop" replace />,
  },
  {
    path: "/offlineworkshop",
    element: <Navigate to="/onlineworkshop" replace />,
  },
]);

export default router;
