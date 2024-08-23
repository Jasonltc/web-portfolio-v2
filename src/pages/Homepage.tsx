import Hero from "../component/Hero";
import AboutHomePage from "../component/AboutHomePage";
import Brands from "../component/Brands";
import DevTools from "../component/DevTools";
import SideProjectPage from "../component/SideProjectPage";
import LetConnect from "../component/LetConnect";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AboutHomePage />
      <Brands />
      <DevTools />
      <SideProjectPage />
      <LetConnect />
    </div>
  );
};

export default Homepage;
