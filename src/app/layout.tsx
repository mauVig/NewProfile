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
      <head>
        <link rel="icon" href="/vercel.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mauro Vigliero" />
        <meta name="keywords" content="Desarrollador Web, Full Stack Developer, Frontend Developer, Backend Developer, React, Node.js, Next.js, JavaScript, TypeScript, Portfolio, Web Applications, Software Engineer" />
        <meta name="description" content="Full Stack Developer | Frontend & Backend Developer | Passionate about creating efficient and scalable web solutions using modern technologies." />
        <meta property="og:title" content="Mauro Vigliero 😊" />
        <meta property="og:description" content="Full Stack Developer | Frontend & Backend Developer | Passionate about creating efficient and scalable web solutions using modern technologies." />
        <meta property="og:image" content="/vercel.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maurovigliero.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mauro Vigliero 😊" />
        <meta name="twitter:description" content="Full Stack Developer | Frontend & Backend Developer | Passionate about creating efficient and scalable web solutions using modern technologies." />
        <meta name="twitter:image" content="/vercel.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}