import "./NavBar.scss";
import SectionWrapper from "../../assets/SectionWrapper";
import NavButton from "./NavButton";
import { urlRouter } from "../../routes/urlRouter";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navButtons = [
    { label: "Plakaty", url: urlRouter.plakatyPage },
    { label: "Kartki", url: urlRouter.kartkiPage },
    { label: "Kalendarze", url: urlRouter.kalendarzePage },
    { label: "Zlecenia indywidualne", url: urlRouter.zleceniaIndywidualne },
    { label: "Kontakt", url: urlRouter.kontakt },
  ];
  return (
    <nav className="nav-bar">
      <SectionWrapper>
        <div className="nav-buttons-wrapper">
          {navButtons.map((btn) => (
            <Link to={btn.url} className="link-defaults">
              <NavButton label={btn.label} />
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </nav>
  );
};

export default NavBar;
