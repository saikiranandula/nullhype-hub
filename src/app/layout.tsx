import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nullhype.tech"),
  title: "Nullhype - AI Signals, Labs, and Builder Tools",
  description:
    "Nullhype finds, tests, and explains AI and frontier-tech shifts before their business consequences become obvious.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nullhype",
    description:
      "AI market signals, builder experiments, and small tools from Nullhype Labs.",
    url: "https://nullhype.tech",
    siteName: "Nullhype",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nullhype",
    description:
      "AI market signals, builder experiments, and small tools from Nullhype Labs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
