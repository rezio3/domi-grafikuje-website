import ImageItem from "./ImageItem";
import PriceText from "./PriceText";
import TextItem from "./TextItem";

type ImageItemBoxProps = {
  imgSrc: string;
  name: string;
  price: number;
  priceMinor?: number;
  rangePrice?: number;
  rangePriceMinor?: number;
  alt?: string;
};

const ImageItemBox: React.FC<ImageItemBoxProps> = ({
  imgSrc,
  name,
  price,
  priceMinor,
  rangePrice,
  rangePriceMinor,
  alt,
}) => {
  return (
    <div className="image-item-box">
      <div className="image-item-img-wrapper">
        <ImageItem src={imgSrc} className="image-item-img" alt={alt} />
      </div>
      <br />
      <TextItem fontSize={14} fontWeight={500}>
        {name}
      </TextItem>
      <div>
        <PriceText value={price} valueMinor={priceMinor} />
        {rangePrice && (
          <>
            {" "}
            - <PriceText value={rangePrice} valueMinor={rangePriceMinor} />
          </>
        )}
      </div>
    </div>
  );
};

export default ImageItemBox;
