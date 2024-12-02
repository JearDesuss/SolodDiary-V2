'use client';

import { cn } from '@/lib/utils';

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SocialIcon({ href, children, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'text-mine-shaft hover:scale-110 transition-transform duration-200',
        className
      )}
    >
      {children}
    </a>
  );
}