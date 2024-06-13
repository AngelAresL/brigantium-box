import type { Metadata } from "next";
import { homeMetadata } from "@/data/metadata";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      </head>
      <body className={raleway.className}>
        <Header />
        <div>{children}</div>
        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
