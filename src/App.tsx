// import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
// import Home from "./pages/Home";
import UpperBadge from "./components/UpperBadge";
import LogoHeader from "./components/LogoHeader";
import NavBar from "./components/Navigation/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartPanel from "./components/Cart/CartPanel";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="page-wrapper">
          <UpperBadge />
          <LogoHeader />
          <NavBar />
          <Home />
          <Footer />
          <CartPanel />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
