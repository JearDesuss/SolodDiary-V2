import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "text-2xl tracking-wider relative transition-transform duration-200 hover:scale-110",
        "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-mine-shaft",
        "after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100",
        "after:transition-transform after:duration-200 after:origin-center",
        className
      )}
    >
      {children}
    </Link>
  );
}