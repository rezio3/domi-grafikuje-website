import Button from "../elements/Button";
import TextItem from "../elements/TextItem";

export const CartFooterSums = () => {
  const sumBoxes = [
    { label: "Suma", value: "55,00 zł" },
    { label: "Wysyłka", value: "Za darmo" },
    { label: "Suma", value: "55,00 zł" },
  ];
  return (
    <div className="cart-footer-container">
      <div className="sum-and-btn-boxes">
        {sumBoxes.map((box, index) => (
          <SumBox key={box.label + index} label={box.label} value={box.value} />
        ))}
        <Button
          className="pink-button checkout-button"
          fontSize={18}
          fontWeight={700}
          padding={"9px 20px"}
        >
          Przejdź do kasy
        </Button>
      </div>
    </div>
  );
};

type SumBoxProps = {
  label: string;
  value: string;
};

const SumBox = ({ label, value }: SumBoxProps) => {
  return (
    <div className="sum-box">
      <TextItem fontSize={14} fontWeight={500}>
        {label}
      </TextItem>
      <TextItem fontSize={14} fontWeight={700}>
        {value}
      </TextItem>
    </div>
  );
};
