import TextItem, { type TextItemProps } from "./TextItem";
import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  padding?: string;
} & TextItemProps;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  padding,
  ...textProps
}) => {
  return (
    <button
      className={`btn ${className || ""}`}
      onClick={onClick}
      style={{ padding: padding || 0 }}
    >
      <TextItem {...textProps}>{children}</TextItem>
    </button>
  );
};

export default Button;
