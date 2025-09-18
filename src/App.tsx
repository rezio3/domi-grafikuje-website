// import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
// import Home from "./pages/Home";
import UpperBadge from "./components/UpperBadge";
import LogoHeader from "./components/LogoHeader";

function App() {
  return (
    <div className="App">
      <div></div>
      <UpperBadge />
      <LogoHeader />
      <div className="page-wrapper">
        <h1>Elo</h1>
        <div style={{ padding: "20px", fontFamily: "Arial" }}></div>
      </div>
    </div>
  );
}

export default App;
