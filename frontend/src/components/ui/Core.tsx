import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility for Tailwind Class Merging ---
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Glass Card Component ---
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'light' | 'medium' | 'strong' | 'ultra';
}

export const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true,
  intensity = 'medium'
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const intensityClasses = {
    light: 'bg-white/50 border-black/5 text-brand-charcoal',
    medium: 'bg-white border-black/5 text-brand-charcoal shadow-sm',
    strong: 'bg-white border-black/5 text-brand-charcoal shadow-premium',
    ultra: 'bg-white border-black/10 text-brand-charcoal shadow-floating'
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-[2.5rem] relative overflow-hidden transition-all duration-700",
        intensityClasses[intensity],
        hoverEffect && "hover:border-brand-blue/30",
        className
      )}
    >
      {/* Interactive Spotlight Effect */}
      {hoverEffect && (
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-1000 z-0 text-brand-blue"
          style={{
            opacity,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, var(--brand-blue-glow), transparent 40%)`,
          }}
        />
      )}
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

// --- Premium Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'mint' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'text-brand-charcoal/40 hover:text-brand-charcoal hover:bg-brand-gray-light',
    mint: 'bg-brand-mint text-white hover:bg-brand-mint-light shadow-glow-mint border-none',
    cyan: 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-glow border-none'
  };

  const sizeStyles = {
    sm: 'px-8 py-3 text-[10px] uppercase tracking-[0.2em]',
    md: 'px-11 h-12 text-xs uppercase tracking-[0.3em]',
    lg: 'px-14 h-16 text-sm uppercase tracking-[0.4em]',
    xl: 'px-20 h-20 text-base uppercase tracking-[0.5em]'
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-2xl font-black transition-all duration-500 relative flex items-center justify-center gap-4 overflow-hidden disabled:opacity-50 disabled:pointer-events-none font-inter",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// --- Premium Badge Component ---
export const Badge = ({ 
  children, 
  variant = 'blue',
  className 
}: { 
  children: React.ReactNode, 
  variant?: 'blue' | 'mint' | 'purple' | 'gold',
  className?: string 
}) => {
  const variantClasses = {
    blue: 'badge-blue',
    mint: 'badge-mint',
    purple: 'badge-purple',
    gold: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
  };

  return (
    <div className={cn(
      "badge font-black uppercase tracking-[0.4em] text-[9px] px-6 py-2 rounded-full border", 
      variantClasses[variant as keyof typeof variantClasses],
      className
    )}>
      {children}
    </div>
  );
};
