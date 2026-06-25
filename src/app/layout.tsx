import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satria Alfata",
  description:
    "Portfolio personal Satria Alfata v1 — Data Scientist & Cybersecurity enthusiast.",
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
          {/* Fixed sidebar */}
          <Sidebar />

          {/* Main content — push right by sidebar width on desktop */}
          <main className="md:ml-[260px] min-h-screen pt-[64px] md:pt-0">
            <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
