import { ButtonHTMLAttributes, ReactNode } from "react";
import { CircleNotch, List } from "phosphor-react";

const VARIANTS = {
  primary: {
    "background-color": "bg-purple-500",
    "background-color-on-hover": "enabled:hover:bg-purple-400",
  },
  secondary: {
    "background-color": "bg-darkPurple-600",
    "background-color-on-hover": "enabled:hover:bg-darkPurple-500",
  },
  tertiary: {
    "background-color": "",
    "background-color-on-hover": "",
  },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
  isDraggable?: boolean;
};

export const Button = ({
  title,
  icon,
  className,
  variant = "primary",
  isLoading = false,
  isDraggable = false,
  ...rest
}: ButtonProps) => {
  const renderedIcon = isLoading ? (
    <CircleNotch className="animate-spin" size={20} />
  ) : isDraggable ? (
    <List size={20} />
  ) : (
    icon
  );

  return (
    <button
      className={`
        uppercase w-full py-3 text-sm rounded-3xl flex align-center justify-center gap-2
        focus:outline focus:outline-2 focus:outline-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed 
        ${VARIANTS[variant]["background-color"]} 
        ${VARIANTS[variant]["background-color-on-hover"]}
        ${isDraggable && "enabled:hover:cursor-move"}
        ${isLoading && "enabled:hover:cursor-wait"}
        ${className}
      `}
      {...rest}
    >
      {renderedIcon}
      {title}
    </button>
  );
};
