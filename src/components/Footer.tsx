import "./Footer.scss";
import logoFooter from "../img/domiGrafikujeLogoFooter.png";
import fbIcon from "../img/facebook.png";
import instaIcon from "../img/instagram.png";
import ImageItem from "./elements/ImageItem";
import SectionWrapper from "../assets/SectionWrapper";
import TextItem from "./elements/TextItem";

const Footer = () => {
  const linksColumn1 = [
    { label: "Sklep", header: true },
    { label: "Plakaty" },
    { label: "Kartki" },
    { label: "Kalendarze" },
    { label: "Zlecenia indywidualne" },
  ];
  const linksColumn2 = [
    { label: "Ważne info", header: true },
    { label: "Dostawy i wysyłka" },
    { label: "Regulamin sklepu" },
    { label: "Polityka prywatności" },
  ];
  const linksColumn3 = [
    { label: "Tutaj mnie znajdziesz!", header: true },
    { label: "Instagram" },
    { label: "Behance" },
    { label: "Kontakt" },
  ];
  const generateLinksColumn = (linksArray: any[]) => {
    return linksArray.map((item, index) => {
      return (
        <TextItem
          key={item.label + index}
          fontSize={14}
          fontWeight={item.header ? 500 : 400}
          className="single-footer-link"
        >
          {item.label}
        </TextItem>
      );
    });
  };
  return (
    <div className="footer-overlay">
      <SectionWrapper>
        <div className="footer-container">
          <div className="logo-and-icons-wrapper">
            <ImageItem src={logoFooter} className="footer-logo" />
            <div className="social-icons-container">
              <ImageItem src={fbIcon} className="social-icon" />
              <ImageItem src={instaIcon} className="social-icon" />
            </div>
          </div>
          <div className="footer-links">
            {generateLinksColumn(linksColumn1)}
          </div>

          <div className="footer-links">
            {generateLinksColumn(linksColumn2)}
          </div>
          <div className="footer-links">
            {generateLinksColumn(linksColumn3)}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
