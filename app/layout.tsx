import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LINE口コミ促進Bot | お客様の声を自動で集める",
  description:
    "施術後にLINEで自動送信。お客様がタップするだけでGoogleマップやSNSに口コミが集まる、美容サロン専用の口コミ促進ツールです。",
  openGraph: {
    title: "LINE口コミ促進Bot | お客様の声を自動で集める",
    description: "施術後にLINEで自動送信。タップするだけで口コミが集まる。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
