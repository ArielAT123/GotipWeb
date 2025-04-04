// 'use client';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'choices.js/public/assets/styles/choices.min.css';
import BootstrapClient from '@/components/BootstrapClient';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainHeader from '@/components/layouts/mainHeader';
import Footer from '@/components/layouts/footer';
// import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GOtip',
  description: 'Emprendedor social con 5+ años en negocios sostenibles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  // console.log('usepathname', pathname);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainHeader />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}