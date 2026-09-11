import { Cinzel, Poppins, DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Trinetra — Law Chambers",
  description: "Trinetra Law Chambers - Premier Legal Practice, Corporate Advisory, and Litigation Services.",
  icons: {
    icon: [
      { url: '/Trinetra-Law-Chamber-logo.jpg', sizes: 'any' },
      { url: '/Trinetra-Law-Chamber-logo.jpg', type: 'image/jpeg' },
    ],
    shortcut: ['/Trinetra-Law-Chamber-logo.jpg'],
    apple: [
      { url: '/Trinetra-Law-Chamber-logo.jpg' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${poppins.variable} ${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/Trinetra-Law-Chamber-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/Trinetra-Law-Chamber-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Trinetra-Law-Chamber-logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#2D2926]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
