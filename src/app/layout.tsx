import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Be_Vietnam_Pro } from "next/font/google";
import localFont from "next/font/local";
import BackgroundMusic from "./background-music";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-script",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

const brotherSignature = localFont({
  src: "../assets/fonts/Brother Signature.otf",
  variable: "--font-brother-sign",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiệp mời tốt nghiệp | Nguyễn Hoàng Nguyên",
  description: "Thiệp mời lễ tốt nghiệp của Nguyễn Hoàng Nguyên",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`h-full antialiased ${playfair.variable} ${dancingScript.variable} ${beVietnamPro.variable} ${brotherSignature.variable}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
