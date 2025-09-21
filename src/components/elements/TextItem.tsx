import "./TextItem.scss";

type FontWeights = 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type FontNames = "Outfit" | "Fraunces";

export type TextItemProps = {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeights;
  letterSpacing?: number;
  isLowercase?: boolean;
  lineHeight?: number;
  fontName?: FontNames;
  opacity?: number;
  className?: string;
};

const TextItem: React.FC<TextItemProps> = ({
  children,
  fontSize,
  fontWeight,
  letterSpacing,
  isLowercase,
  lineHeight,
  fontName,
  opacity,
  className,
}: TextItemProps) => {
  return (
    <span
      className={`text-item-span ${className || ""}`}
      style={{
        fontSize: fontSize || 22,
        fontWeight: fontWeight || 400,
        letterSpacing: letterSpacing || 0,
        textTransform: isLowercase ? "none" : "uppercase",
        lineHeight: lineHeight || 1.4,
        fontFamily: fontName || "Outfit",
        opacity: opacity || 1,
      }}
    >
      {children}
    </span>
  );
};

export default TextItem;
