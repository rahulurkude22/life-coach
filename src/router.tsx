import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Praise from "./pages/Praise";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/praise",
        element: <Praise />,
      },
      { path: "*", element: <>Not found</> },
    ],
  },
]);

export default router;
