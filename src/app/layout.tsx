import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ggb | Portfolio",
  description: "Frontend Developer & Creative Coder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <header className="border-b border-zinc-900">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="text-lg font-medium tracking-tight">
                ggb
              </a>
              <Navbar />
            </div>
          </Container>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-900">
          <Container className="py-8">
            <div className="flex items-center justify-between text-sm text-zinc-500">
              <p>© 2024 ggb. All rights reserved.</p>
              <p>Built with Next.js & Tailwind CSS</p>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
