import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noman Siddiqui | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Python, and AI-powered applications. Building exceptional digital experiences.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Python",
    "AI",
    "Freelancer",
    "Upwork",
  ],
  authors: [{ name: "Noman Siddiqui" }],
  openGraph: {
    title: "Noman Siddiqui | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Python, and AI-powered applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noman Siddiqui | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Python, and AI-powered applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-black-100`}>
        {children}
      </body>
    </html>
  );
}
