import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "*", element: <>Not found</> },
    ],
  },
]);

export default router;
