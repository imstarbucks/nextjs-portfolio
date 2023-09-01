import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Cursor from '@/components/cursor';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Spencer's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className + 'relative'}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
