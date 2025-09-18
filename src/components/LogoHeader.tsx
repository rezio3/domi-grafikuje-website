import Logo from "../img/logo.svg";
import SearchIcon from "../img/search.svg";
import CartIcon from "../img/shopping_cart.svg";
import "./HeaderWrapper.scss";

const LogoHeader = () => {
  const cartHandler = () => {
    console.log("cart clicked");
  };
  return (
    <header className="header-wrapper">
      <img src={SearchIcon} alt="Logo" width={24} height={24} />
      <img src={Logo} alt="Logo" width={59} height={44} />
      <button onClick={cartHandler}>
        <img src={CartIcon} alt="Logo" width={24} height={24} />
      </button>
    </header>
  );
};

export default LogoHeader;
