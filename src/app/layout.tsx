import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Martian_Mono, Poppins } from "next/font/google";

import { Footer, Header } from "@/structure";

import "./globals.css";
import "./page.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

const martian = Martian_Mono({
  variable: "--font-code",
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | CCS",
    default: "Childhood Cancer Society",
    absolute: "Childhood Cancer Society",
  },
  description: "Let's see the adventure in all that we do!",
  authors: [
    { name: "ANNI" },
    { name: "CCS Dev Team", url: "https://childhoodcancersociety.dev" },
  ],
  creator: "ANNI",
  publisher: "Childhood Cancer Society",
  themeColor: "#336907",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${martian.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
