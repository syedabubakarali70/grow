import type { Metadata } from "next"
import localFont from "next/font/local"
import "@/styles/tailwind.css"
import Footer from "@/shared/components/Layout/Footer"

const poppins = localFont({
  src: "../assets/fonts/Poppins/Poppins-Regular.ttf",
  weight: "400",
  variable: "--font-poppins",
})
const poppinsExtraBold = localFont({
  src: "../assets/fonts/Poppins/Poppins-ExtraBold.ttf",
  weight: "800",
  variable: "--font-poppins-extrabold",
})

export const metadata: Metadata = {
  title: "GrowECD",
  description: "Generated by create next app",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppinsExtraBold.variable} flex min-h-svh flex-col antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
