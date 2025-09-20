import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
type CartContextType = {
  isCartOn: boolean;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOn, setIsCartOn] = useState(false);

  const toggleCart = () => setIsCartOn((prev) => !prev);

  return (
    <CartContext.Provider value={{ isCartOn, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
