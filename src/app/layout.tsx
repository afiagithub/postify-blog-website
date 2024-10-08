import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Postify",
    template: "%s | Postify"
  },
  description: "A Blog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-rale`} data-theme='light'
        >
          <Navbar />
          <ToastContainer />
          {children}
          <Footer/>
        </body>
      </AuthProvider>
    </html>
  );
}
