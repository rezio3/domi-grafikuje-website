import "./TextItem.scss";

type TextItemProps = {
  label: string;
  fontSize?: number;
};

const TextItem = ({ label, fontSize }: TextItemProps) => {
  return (
    <span className="text-item-span" style={{ fontSize: fontSize || 22 }}>
      {label}
    </span>
  );
};

export default TextItem;
