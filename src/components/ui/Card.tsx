import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hoverEffect = true 
}: CardProps) {
  return (
    <div 
      className={`business-card bg-white rounded-xl border border-[var(--border)] p-6 shadow-[var(--card-shadow)] transition-[var(--transition)] ${
        hoverEffect ? 'hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}