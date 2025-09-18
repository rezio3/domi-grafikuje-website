import "./UpperBadge.scss";
import TextItem from "./elements/TextItem";

const UpperBadge = () => {
  return (
    <div className="upper-badge">
      <TextItem label={"Promocja na start -20%"} fontSize={11} />
    </div>
  );
};

export default UpperBadge;
