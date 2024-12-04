import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/templates/Layout';

export const metadata: Metadata = {
  title: 'SkyWiki',
  description: 'Made with love by BARS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Grandstander:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
