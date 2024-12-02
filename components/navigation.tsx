'use client';

import { NavLink } from '@/components/ui/nav-link';
import { SocialIcon } from '@/components/ui/social-icon';
import { Twitter, Github, MessageSquare } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full flex flex-col items-center gap-8">
      <div className="flex justify-center gap-24 mt-[500px]">
        <NavLink href="/birth">BIRTH</NavLink>
        <NavLink href="/future">FUTURE</NavLink>
        <NavLink href="/docs">DOCS</NavLink>
        <NavLink href="/wallet">WALLET</NavLink>
      </div>
      <div className="absolute top-4 right-4 flex gap-4">
        <SocialIcon href="https://twitter.com/dolos">
          <Twitter className="w-6 h-6" />
        </SocialIcon>
        <SocialIcon href="https://discord.gg/dolos">
          <MessageSquare className="w-6 h-6" />
        </SocialIcon>
        <SocialIcon href="https://github.com/dolos">
          <Github className="w-6 h-6" />
        </SocialIcon>
      </div>
    </nav>
  );
}