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
import Plakaty from "./pages/Plakaty";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div className="page-wrapper">
            <UpperBadge />
            <LogoHeader />
            <NavBar />
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/plakaty" element={<Plakaty />} />
            </Routes>

            {/* <Plakaty /> */}
            <Footer />
            <CartPanel />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
