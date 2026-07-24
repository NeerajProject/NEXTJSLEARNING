import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import PageHeader from "./components/PageHeader";
import StatusFooter from "./components/StatusFooter";
import RightPanel from "./components/RightPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ERP System",
    template: "%s | ERP System",
  },
  description: "Enterprise Resource Planning System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
        <div className="flex h-screen w-full bg-white text-gray-800 font-sans text-sm overflow-hidden selection:bg-red-100">
          
          {/* 1. SIDEBAR NAVIGATION */}
          <Sidebar  />
    
          {/* MAIN CONTENT WRAPPER */}
          <div className="flex flex-col flex-1 min-w-0">
            
            {/* 2. TOP NAVBAR */}
  {children}
          </div>
        </div>
      </body>
    </html>
  );
}