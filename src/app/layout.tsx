import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Permanent_Marker, Kaushan_Script, Manrope } from "next/font/google";
import { brand } from "@/config/brand";
import { project } from "@/config/project";
import "./globals.css";
const display = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});
const script = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  metadataBase: project.siteUrl ? new URL(project.siteUrl) : undefined,
  title: `${brand.name} | 4-Wochen-Pilot auf FRANKLIN`,
  description:
    "Nach dem ausverkauften LOOPFEST-Test: ein temporäres Coffee-&-Chicken-Pilotprojekt für FRANKLIN Mannheim. Gesucht: 30–50 m² für vier Wochen.",
  openGraph: {
    title: `${brand.name} — Aus FRANKLIN. Für FRANKLIN.`,
    description:
      "4 Wochen. 30–50 m². Ein nächster Schritt für ein bereits getestetes Streetfood-Konzept.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/assets/loopfest/approved-community.webp",
        width: 1536,
        height: 2048,
        alt: "Gäste am echten LOOPFEST-Stand auf FRANKLIN",
      },
    ],
  },
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        className={`${display.variable} ${script.variable} ${body.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
