import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./navbar/page"
import Footers from "./Footer/footers"

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lift Card",
  description: "The Social Media Fitness App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footers />
      </body>
    </html>
  );
}
