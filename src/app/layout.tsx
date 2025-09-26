import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mauro Vigliero 😊",
  description: "Full Stack Developer | Frontend & Backend Developer | Passionate about creating efficient and scalable web solutions using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
