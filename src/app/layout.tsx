import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Learning Curve - Expand Your Knowledge",
  description:
    "Discover a variety of courses to enhance your skills and advance your career on Learning Curve. Join today to start learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
