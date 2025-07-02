import React from "react";
import "./IconButton.css";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  rightIcon,
  children,
  className = "",
  ...props
}) => {
  const onlyIcon = !!icon && !children && !rightIcon;
  return (
    <button
      className={`icon-button${onlyIcon ? " only-icon" : ""} ${className}`}
      {...props}
    >
      {icon && <span className="icon-button-icon">{icon}</span>}
      {children && <span className="icon-button-text">{children}</span>}
      {rightIcon && <span className="icon-button-right-icon">{rightIcon}</span>}
    </button>
  );
};
