import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import WrappingProvider from "@/Providers/WrappingProvider";
import MainNavbar from "@/components/Layout/MainNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bosta task",
  description: "front end developer task in bosta",
  keywords: ["bosta", "task", "front end"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <WrappingProvider>
          <MainNavbar />
          <div className="px-2 sm:px-5">{children}</div>
        </WrappingProvider>
      </body>
    </html>
  );
}
