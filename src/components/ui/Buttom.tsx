import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light';
  icon?: string;
  children: ReactNode;
  className?: string;
  dataBsToggle?: string;
  dataBsTarget?: string;
}

export default function Button({ 
  variant = 'primary', 
  icon, 
  children, 
  className = '',
  dataBsToggle,
  dataBsTarget
}: ButtonProps) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    light: 'btn-light'
  };
  
  return (
    <button 
      className={`btn ${variantClasses[variant]} ${className}`}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
    >
      {icon && <i className={`fa-solid fa-${icon} pe-1`}></i>}
      {children}
    </button>
  );
}