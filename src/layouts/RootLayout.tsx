import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

function RootLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
