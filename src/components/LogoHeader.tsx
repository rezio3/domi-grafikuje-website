import SectionWrapper from "../assets/SectionWrapper";
import Logo from "../img/logo.svg";
import SearchIcon from "../img/search.svg";
import CartIcon from "../img/shopping_cart.svg";
import Button from "./elements/Button";
import { useCart } from "../context/CartContext";
import "./LogoHeader.scss";

const LogoHeader = () => {
  const { toggleCart } = useCart();

  return (
    <SectionWrapper>
      <header className="header-wrapper">
        <img src={SearchIcon} alt="search icon" width={24} height={24} />

        <img src={Logo} alt="logo" width={59} height={44} />

        <Button onClick={toggleCart}>
          <img src={CartIcon} alt="cart icon" width={24} height={24} />
        </Button>
      </header>
    </SectionWrapper>
  );
};

export default LogoHeader;
