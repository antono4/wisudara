import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Belleza, Alegreya } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import AnnouncementBar from '@/components/layout/announcement-bar';
import { AnalyticsProvider } from '@/components/analytics';

const belleza = Belleza({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});


export const metadata: Metadata = {
  title: 'Wisudara | Fotografi Momen Spesial di Padang',
  description: 'Seni Fotografi Momen di Padang. Abadikan setiap momen berharga Anda dengan gaya modern, minimalis dan elegan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn('font-body antialiased overflow-x-hidden', belleza.variable, alegreya.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <AnnouncementBar />
          {children}
          <Toaster />
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  );
}
