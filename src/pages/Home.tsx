import SectionWrapper from "../assets/SectionWrapper";
import ImageItem from "../components/elements/ImageItem";
import ImageItemBox from "../components/elements/ImageItemBox";

import mainPageImg from "../img/mainPageImg.png";
import noweWSklepeImg from "../img/NOWE W SKLEPIE.svg";
import plakat1 from "../img/plakat1.png";
import plakat2 from "../img/plakat2.png";
import plakat3 from "../img/plakat3.png";
import type { ProductsList } from "../types/products";
import "./Home.scss";

const Home = () => {
  const mainPageProducts: ProductsList = [
    { imgSrc: plakat1, name: "Kartka ślubna", price: 14 },
    {
      imgSrc: plakat2,
      name: `Plakat "Bóg jest miłością"`,
      price: 45,
      rangePrice: 120,
    },
    { imgSrc: plakat3, name: "Kartka ślubna", price: 14 },
  ];
  return (
    <>
      <div className="main-page-img-container">
        <ImageItem src={mainPageImg} className="main-page-img" />
      </div>
      <img src={noweWSklepeImg} style={{ margin: "60px 0px" }} />
      <SectionWrapper>
        <div className="image-boxes-wrapper">
          {mainPageProducts.map((item) => {
            return (
              <ImageItemBox
                imgSrc={item.imgSrc}
                name={item.name}
                price={item.price}
                priceMinor={item.priceMinor}
                rangePrice={item.rangePrice}
                rangePriceMinor={item.rangePriceMinor}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
