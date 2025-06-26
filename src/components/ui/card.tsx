import React from "react";
import { clsx } from "clsx";

// Card component props interface
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
  padding?: "sm" | "md" | "lg";
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  padding = "md",
  onClick,
  hoverable = false,
}) => {
  const baseStyles = "rounded-xl transition-all duration-200";

  const variantStyles = {
    default: "bg-white",
    elevated: "bg-white shadow-lg hover:shadow-xl",
    bordered: "bg-white border border-neutral-200",
  };

  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hoverable ? "hover:scale-[1.02] cursor-pointer" : "";
  const clickableStyles = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles,
        clickableStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Card Header component
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("mb-4", className)}>{children}</div>;
};

// Card Content component
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("mb-4", className)}>{children}</div>;
};

// Card Footer component
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("mt-auto", className)}>{children}</div>;
};
