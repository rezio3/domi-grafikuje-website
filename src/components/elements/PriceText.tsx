import TextItem from "./TextItem";

type PriceTextProps = {
  value: number;
  valueMinor?: number;
};
const PriceText = ({ value, valueMinor }: PriceTextProps) => {
  return (
    <TextItem fontSize={12} fontWeight={300} isLowercase={true}>
      {value}.{valueMinor ? valueMinor + " zł" : "00 zł"}
    </TextItem>
  );
};

export default PriceText;
