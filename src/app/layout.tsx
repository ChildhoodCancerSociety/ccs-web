import "./globals.css";
import "./page.css";
import { Footer, Header } from "@/structure";

export const metadata = {
  title: "Childhood Cancer Society",
  description: "Let's see the adventure in all that we do!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
