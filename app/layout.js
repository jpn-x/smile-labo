import { Noto_Sans_JP, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const mplusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-mplus",
  display: "swap",
});

export const metadata = {
  title: "SMILE LABO by 信頼発電所｜30〜40代の大人のコミュニティ",
  description:
    "車・不動産・古民家民泊・陸送の実利特典と、株＆AI勉強会のDiscordコミュニティが1つになった、30〜40代のための会員制クラブ「SMILE LABO by 信頼発電所」。",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "SMILE LABO",
  },
  openGraph: {
    title: "SMILE LABO by 信頼発電所",
    description:
      "笑顔でつながり、人生をちょっと面白くする。30〜40代のための大人のコミュニティ。",
    locale: "ja_JP",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#060815",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${mplusRounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
