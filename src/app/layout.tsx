import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kimochi",
  description: "in production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "'Times New Roman', serif" }}>
        {children}
      </body>
    </html>
  );
}
