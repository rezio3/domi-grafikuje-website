import SectionWrapper from "../../assets/SectionWrapper";
import ImageItemBox from "../../components/elements/ImageItemBox";
import plakat1 from "../../img/plakat1.png";
import plakat2 from "../../img/plakat2.png";
import plakat3 from "../../img/plakat3.png";
import type { ProductsList } from "../../types/products";

const MainPageProductsSection = () => {
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
  );
};

export default MainPageProductsSection;
