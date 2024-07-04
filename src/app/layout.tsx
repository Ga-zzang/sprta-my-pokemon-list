import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparta Pokemon",
  description: "My Pokemon List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[100px] text-center pt-4">
          <h2 className="font-bold text-xl p-10">Pokemon List</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
