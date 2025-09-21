import { useCart } from "../../context/CartContext";
import Button from "../elements/Button";
import ImageItem from "../elements/ImageItem";
import "./CartPanel.scss";
import closeButtonIcon from "../../img/close.svg";
import cartHeader from "../../img/koszyk.svg";
import { CartFooterSums } from "./CartFooterSums";
import { products } from "../../products/products";
const CartPanel = () => {
  const { isCartOn, toggleCart } = useCart();

  return (
    <div className={`cart-panel ${isCartOn ? "cart-panel--open" : ""}`}>
      <div className="cart-header-container">
        <Button onClick={toggleCart} className="close-button">
          <ImageItem src={closeButtonIcon} alt="close button" />
        </Button>
        <ImageItem src={cartHeader} alt="cart header" className="cart-header" />
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-box">
            {product.name}, Cena: {product.price} Id: {product.id}
          </div>
        ))}
      </div>
      <CartFooterSums />
    </div>
  );
};

export default CartPanel;
