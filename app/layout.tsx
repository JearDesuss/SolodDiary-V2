import './globals.css';
import type { Metadata } from 'next';
import { pixelFont } from './fonts';

export const metadata: Metadata = {
  title: 'SOLOD - Modern hero renewed',
  description: 'Experience the rebirth of a modern hero in the digital age.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>{children}</body>
    </html>
  );
}