import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Englanti-Suomi Kitaran Sanakirja",
  description: "Sanakirja kitaristeille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-5KB2W41FN1`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5KB2W41FN1');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
