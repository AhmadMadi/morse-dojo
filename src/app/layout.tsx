import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeToggler from "./ui/global/themeToggler";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Morse Dojo",
    default: "Morse Dojo",
  },
  description: "GMorsedojo is a Morse code learning and practice tool that helps users improve their skills with interactive lessons, practice sessions, and performance tracking. Whether you're a beginner or an expert, Morsedojo provides the tools you need to master Morse code.",
  keywords: "Morse code, learn Morse, Morse practice, Morse tutor, Morse code training, Morsedojo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <div className="absolute top-4 right-4">
          <ThemeToggler />
        </div>
        {children}
      </body>
    </html>
  );
}
