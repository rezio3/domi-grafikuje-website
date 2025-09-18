import "./TextItem.scss";

type FontWeights = 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TextItemProps = {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeights;
  letterSpacing?: number;
  isLowercase?: boolean;
};

const TextItem: React.FC<TextItemProps> = ({
  children,
  fontSize,
  fontWeight,
  letterSpacing,
  isLowercase,
}: TextItemProps) => {
  return (
    <span
      className="text-item-span"
      style={{
        fontSize: fontSize || 22,
        fontWeight: fontWeight || 400,
        letterSpacing: letterSpacing || 0,
        textTransform: isLowercase ? "none" : "uppercase",
      }}
    >
      {children}
    </span>
  );
};

export default TextItem;
