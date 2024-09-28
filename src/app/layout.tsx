import type { Metadata } from "next";
import "./globals.css";
import ThemeToggler from "./ui/global/themeToggler";

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
        className={`antialiased`}
      >
                <div className="absolute top-4 right-4">
          <ThemeToggler />
        </div>
        {children}
      </body>
    </html>
  );
}
