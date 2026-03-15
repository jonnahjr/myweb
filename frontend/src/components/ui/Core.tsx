import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true 
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={cn(
        "glass-card p-1 relative",
        className
      )}
    >
      {/* Interactive Shine Effect */}
      {hoverEffect && (
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[2.5rem]"
          style={{
            opacity,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      )}
      
      <div className="relative p-8 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'shiny';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden active:scale-95";
  
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'hover:bg-white/[0.05] text-white transition-all duration-300',
    shiny: 'bg-white text-black hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]'
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};

export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/[0.03] border border-white/[0.08] text-nexyovi-primary", className)}>
    <span className="w-1.5 h-1.5 rounded-full bg-nexyovi-primary mr-2 animate-pulse shadow-[0_0_8px_#00f2ff]"></span>
    {children}
  </div>
);
