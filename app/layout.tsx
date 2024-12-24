import { pretendard } from '@shared/assets/fonts';
import { cn } from '@shared/lib/cn';

import type { Metadata } from 'next';

import '@app/styles/globals.css';

export const metadata: Metadata = {
  title: 'Drawart',
  description: 'Drawart',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </head>
      <body className={cn(pretendard.variable, 'font-pretendard antialiased')}>
        {children}
      </body>
    </html>
  );
}
