// import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
// import Home from "./pages/Home";
import UpperBadge from "./components/UpperBadge";
import LogoHeader from "./components/LogoHeader";
import NavBar from "./components/Navigation/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <UpperBadge />
        <LogoHeader />
        <NavBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
