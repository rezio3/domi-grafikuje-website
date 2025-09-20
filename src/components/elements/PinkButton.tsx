import TextItem from "./TextItem";
import "./PinkButton.scss";

type PinkButtonProps = {
  children: React.ReactNode;
};
const PinkButton: React.FC<PinkButtonProps> = ({ children }) => {
  return (
    <button className="pink-button">
      <TextItem fontWeight={500} fontSize={14}>
        {children}
      </TextItem>
    </button>
  );
};

export default PinkButton;
