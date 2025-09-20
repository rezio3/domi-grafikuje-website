import ImageItem from "../components/elements/ImageItem";
import mainPageImg from "../img/mainPageImg.png";
import noweWSklepeImg from "../img/NOWE W SKLEPIE.svg";

import "./Home.scss";
import AboutSection from "./HomeSections/AboutSection";
import MainPageProductsSection from "./HomeSections/MainPageProductsSection";

const Home = () => {
  return (
    <>
      <div className="main-page-img-container">
        <ImageItem src={mainPageImg} className="main-page-img" />
      </div>
      <img src={noweWSklepeImg} style={{ margin: "60px 0px" }} />
      <MainPageProductsSection />
      <div className="about-section-overlay">
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
