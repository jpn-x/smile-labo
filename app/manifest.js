export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "SMILE LABO by 信頼発電所",
    short_name: "SMILE LABO",
    description: "30〜40代のための会員制コミュニティ",
    start_url: "/",
    display: "standalone",
    background_color: "#060815",
    theme_color: "#060815",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
