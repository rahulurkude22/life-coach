import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
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
        path: "/praise",
        element: <Praise />,
      },
      { path: "*", element: <>Not found</> },
    ],
  },
]);

export default router;
