import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider"; // Import the CartProvider
import Navbartop from '@/components/Navbartop'
import Navbarmiddle from '@/components/Navbarmiddle'
import Navbarbottom from '@/components/Navbarbottom'
// import Navbar from "@/components/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Comforty",
  description:
    "Discover the best furniture collection for your interior at Comforty. Shop stylish, comfortable, and high-quality furniture with free shipping on orders over $50. Transform your space today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
          <Navbartop />
      <Navbarmiddle />
      <Navbarbottom />
            <div className="container max-w-[70vw] mx-auto min-h-[75vh] overflow-x-hidden">
              {children}
            </div>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
