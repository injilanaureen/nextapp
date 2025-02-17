import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Logo from "../components/Logo";
import { NavbarDemo } from "@src/components/navbar";
import {ButtonOutline} from "@src/components/buttonSimple";
import { NavigationMenuDemo } from "@src/components/navigation-menu";
import {SearchInput} from "@src/components/searchInput";



import Button from "@src/components/button"; // Your Button component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeUnique",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex w-full mx-auto gap-x-96 items-center p-4 mt-1 mb-2">
           <Logo />
           <NavigationMenuDemo />
           <div className="flex gap-2 items-center mr-20">
             <Link href="/signup"><Button>Sign Up</Button></Link>
            <ButtonOutline href="/signup">Login</ButtonOutline>
            <SearchInput/>

           </div>
        </header>
        <main>{children}</main>
        <footer>Copyright by The PeUnique</footer>
      </body>
    </html>
  );
}
