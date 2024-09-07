import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P3 Status Tracker",
  description: "Track your P3 status",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-full bg-slate-900 antialiased`}>
        <main className="flex h-full w-full flex-col items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
