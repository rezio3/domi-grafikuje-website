import Button from "../elements/Button";
import TextItem from "../elements/TextItem";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51PWEL9Foou8wOMVkSXyBsYfD8041j3FHkcu78Rl0YV0WGlDhY8fipG0lXFD2dnEsP82AT2BF7UXB4Jc4CUJojsF600JALt4tZF"
);

export const CartFooterSums = () => {
  const sumBoxes = [
    { label: "Suma", value: "55,00 zł" },
    { label: "Wysyłka", value: "Za darmo" },
    { label: "Suma", value: "55,00 zł" },
  ];
  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error("Błąd przekierowania do Stripe:", err);
    }
  };
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
          onClick={handleCheckout}
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
