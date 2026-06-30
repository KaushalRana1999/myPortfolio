import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});



export const metadata: Metadata = {
  title: "Your Name — Full-Stack Developer",
  description:
    "Portfolio of Kaushal Rana, a B.Tech Computer Science & Engineering student and full-stack developer specializing in the MERN stack, Java, and Spring Boot.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "React Developer",
    "Java Spring Boot",
    "B.Tech CSE Portfolio",
  ],
  openGraph: {
    title: "Kaushal Rana — Full-Stack Developer",
    description:
      "B.Tech CSE student and full-stack developer building with React, Node.js, Java, and Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-sans crt antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
