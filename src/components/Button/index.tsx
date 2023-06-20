import "./button.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label?: string;
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  type = "button",
  label = "",
  onClick,
  buttonProps,
}: ButtonProps) => {
  return (
    <button {...buttonProps} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
