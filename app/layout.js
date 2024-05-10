'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "DataBreed Africa | Welcome",
//   description: "Created by Vostlink Technologies",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically load Bootstrap script asynchronously
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);
  return (
    <html lang="en">
      <title>DataBreed Africa | Welcome</title>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
