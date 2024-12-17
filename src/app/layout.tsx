import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Impor font Roboto
import "./globals.css";

// Konfigurasi Font Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Bisa tambahkan opsi weight yang diinginkan
  variable: "--font-roboto", // Variabel CSS untuk font
});

export const metadata: Metadata = {
  title: "Catalog AI Class",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Tetap tambahkan dark mode */}
      <body
        className={`${roboto.variable} antialiased  overflow-x-hidden`}
        style={{ fontFamily: 'var(--font-roboto), Arial, Helvetica, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
