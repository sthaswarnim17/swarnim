
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
  hoverColor?: string;
}

const SocialLink = ({ icon: Icon, href, label, hoverColor }: SocialLinkProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "relative flex items-center justify-center w-12 h-12 rounded-full",
            "bg-background transition-all duration-300",
            "hover:scale-110 hover:shadow-md group",
            "after:absolute after:inset-0 after:rounded-full after:opacity-0",
            "after:transition-opacity hover:after:opacity-100",
            "after:animate-glow"
          )}
          style={{ 
            '--hover-color': hoverColor || 'rgba(var(--primary))' 
          } as React.CSSProperties}
        >
          <Icon 
            className={cn(
              "h-6 w-6 transition-colors duration-300",
              "group-hover:text-foreground"
            )}
            style={{ 
              color: 'var(--icon-color, currentColor)', 
            }}
          />
        </a>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
};

export default SocialLink;
