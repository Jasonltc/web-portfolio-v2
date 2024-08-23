import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainMenu from "../component/MainMenu";
import Footer from "../component/Footer";

const RootLayout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <MainMenu />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
