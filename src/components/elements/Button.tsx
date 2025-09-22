import TextItem, { type TextItemProps } from "./TextItem";
import "./Button.scss";
import arrowOutward from "../../img/arrow_outward.svg";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  padding?: string;
  icon?: "arrow" | "custom";
  iconSize?: IconSize;
} & TextItemProps;

const IconSizes = {
  Small: 10,
  Medium: 15,
  Large: 20,
} as const;

type IconSize = keyof typeof IconSizes;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  padding,
  icon,
  iconSize,
  ...textProps
}) => {
  return (
    <button
      className={`btn ${className || ""}`}
      onClick={onClick}
      style={{ padding: padding || 0 }}
    >
      <TextItem {...textProps}>{children}</TextItem>{" "}
      {icon && (
        <img
          src={arrowOutward}
          width={IconSizes[iconSize!] || 10}
          style={{ marginLeft: 5 }}
        />
      )}
    </button>
  );
};

export default Button;
