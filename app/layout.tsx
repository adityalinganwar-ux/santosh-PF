import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santosh Tulshiram Aher | AI Developer | Software Developer",
  description:
    "Portfolio of Santosh Tulshiram Aher — final-year B.E. CSE student focused on AI development, software development and market research.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
