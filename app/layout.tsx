import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ECD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
