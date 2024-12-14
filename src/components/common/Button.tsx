import { ReactNode } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ variant, children, onClick, className = '' }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-md font-semibold transition-colors";
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-transparent text-gray-700 hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}