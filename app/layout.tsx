import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next DIW",
  description: "Next.js project for DIW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black m-0 p-0`}
      >
        <header>
          <NavBar />
        </header>

        <main>{children}</main>

        <footer className="flex items-center justify-center p-5 mt-5 bg-black">
          <p>DIW - 2025</p>
        </footer>
      </body>
    </html>
  );
}
