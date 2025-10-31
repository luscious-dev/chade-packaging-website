import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chade Packaging",
  description:
    "We craft precision packaging for businesses that demand excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
