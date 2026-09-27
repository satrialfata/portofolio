import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AnimatedCircuitBackground from "@/components/AnimatedCircuitBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satria Alfata",
  description:
    "Portfolio personal Satria Alfata. Data Science, Machine Learning, analisis data, dan Software Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
            <LanguageProvider>
              <AnimatedCircuitBackground />

              {/* Fixed sidebar */}
              <Sidebar />

              {/* Main content: push right by sidebar width on desktop */}
              <main className="md:ml-[260px] min-h-screen pt-[64px] md:pt-0" id="main-content">
                <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>
              </main>
            </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
