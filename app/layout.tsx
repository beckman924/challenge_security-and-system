import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

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
      <body className={`${lato.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
