import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from './components/providers';
import './globals.css';

// Налаштування шрифту Plus Jakarta Sans на використання латинського набору
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
