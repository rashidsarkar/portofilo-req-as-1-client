import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { AOSProvider } from "../components/aos-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Rashid Sarkar - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                  {children}
                </div>
              </div>
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
