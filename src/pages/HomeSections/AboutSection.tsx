import SectionWrapper from "../../assets/SectionWrapper";
import ImageItem from "../../components/elements/ImageItem";
import Button from "../../components/elements/Button";
import TextItem from "../../components/elements/TextItem";
import aboutImage from "../../img/aboutImg.png";
import dgNaklejka from "../../img/dgnaklejka.svg";

const AboutSection = () => {
  return (
    <SectionWrapper>
      <div className="about-text-container">
        <ImageItem src={dgNaklejka} className="dgnaklejka-image" />
        <TextItem fontSize={30} fontName="Fraunces" isLowercase>
          Hejka, tu Domi!
        </TextItem>

        <div className="about-text-span-container">
          <TextItem fontSize={18} fontWeight={300} isLowercase lineHeight={1.5}>
            Od lat tworzę chrześcijańskie grafiki, by dzielić się dobrą nowiną.
            Żyję Bożym Słowem i to ono jest źródłem mojej inspiracji. Każdy
            plakat i każda kartka powstają na Bożą chwałę – mają nie tylko
            zdobić wnętrza, ale także wnosić pokój i radość oraz przypominać o
            Tym, który daje prawdziwe życie. Zajrzyj do sklepu i wybierz
            projekt, który wypełni Twoją przestrzeń dobrym przesłaniem.
          </TextItem>
        </div>
        <div></div>
        <div>
          <Button
            className="pink-button"
            fontWeight={500}
            fontSize={14}
            padding="9px 20px"
          >
            Sprawdź plakaty
          </Button>
        </div>
      </div>
      <div className="about-image-container">
        <ImageItem src={aboutImage} className="about-image" />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
