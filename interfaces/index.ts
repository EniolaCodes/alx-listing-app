export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  loading?: boolean;
}
