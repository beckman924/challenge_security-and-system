import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge para Security and System",
  description:
    "Este proyecto es una página web personal como parte de un challenge para Security and System. El proyecto está implementado utilizando React y Next.js 14, y los estilos se gestionan con CSS Modules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
