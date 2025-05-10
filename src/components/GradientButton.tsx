
import React, { useState } from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  pulseColor?: string;
}

export function GradientButton({
  children,
  className,
  gradientFrom = "from-blue-500",
  gradientTo = "to-purple-600",
  pulseColor = "blue-400",
  ...props
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative group">
      {/* Pulse effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full group-hover:blur-md transition-all duration-500",
          `bg-gradient-to-r ${gradientFrom} ${gradientTo}`,
          isHovered ? "opacity-70 scale-110" : "opacity-0 scale-100"
        )}
        aria-hidden="true"
      />
      
      <Button
        className={cn(
          "relative rounded-full z-10 transition-all duration-300",
          `bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:shadow-lg`,
          `hover:shadow-${pulseColor}/30 border-0`,
          isHovered ? "scale-105" : "scale-100",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}
