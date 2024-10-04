import './globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';

import ReactQueryProviders from '@/libs/react-query-provider';

export const metadata: Metadata = {
  title: 'Next app',
  description: 'Description Next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProviders>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
