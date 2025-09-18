import "./NavBar.scss";
import SectionWrapper from "../../assets/SectionWrapper";
import NavButton from "./NavButton";

const NavBar = () => {
  const navButtons = [
    { label: "Plakaty" },
    { label: "Kartki" },
    { label: "Kalendarze" },
    { label: "Zlecenia indywidualne" },
    { label: "Kontakt" },
  ];
  return (
    <nav className="nav-bar">
      <SectionWrapper>
        <div className="nav-buttons-wrapper">
          {navButtons.map((btn) => (
            <NavButton label={btn.label} />
          ))}
        </div>
      </SectionWrapper>
    </nav>
  );
};

export default NavBar;
