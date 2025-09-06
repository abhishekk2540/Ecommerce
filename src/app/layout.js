import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MiddleBar from "../components/MiddleBar";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import One from "@/components/One";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EComArray: Top Rated ECommerce Seller Account Management Services",
  description:
    "We are the leading E-commerce service provider in India with expertise in managing seller accounts and increasing product visibility and ranking to grow sales.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       
        <TopBar/>
        <MiddleBar/>
        <Header/>
        <MobileMenu></MobileMenu>
        <main>{children}</main>
          <One/>
        <Footer/>
      </body>
    </html>
  );
}
