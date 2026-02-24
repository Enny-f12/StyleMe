import React from 'react';

// Define the custom props and extend standard HTML button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props // Collect all other standard props (onClick, type, etc.)
}: ButtonProps) => {
  
  const baseStyles = "px-8 py-3 font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-sm";
  
  const variants = {
    // Solid Yellow Button
    primary: "bg-primary text-primary-foreground hover:bg-[#E6C200] active:scale-95 rounded-lg shadow-lg hover:shadow-xl",
    // Ghost/Bordered Button
    secondary: "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-white",
    // Icon/Floating style
    icon: "bg-[#FFD700]/90 backdrop-blur-sm p-2 rounded-full hover:scale-110"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props} // Spread standard props onto the actual button element
    >
      {children}
    </button>
  );
};

export default Button;