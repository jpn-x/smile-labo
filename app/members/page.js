import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "メンバーズページ（近日公開）｜SMILE LABO by 信頼発電所",
  description: "SMILE LABO会員がSNSを公開してつながれるメンバーズページ。近日公開予定です。",
};

export default function Members() {
  return (
    <>
      <Header />
      <main className="py-20 md:py-28">
        <div className="wrap max-w-2xl text-center">
          <span className="chip mb-5">COMING SOON</span>
          <h1 className="font-display text-2xl font-800 md:text-3xl">
            メンバーズページ、準備中です
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            公開してもいいよ、という会員さんだけ、SNSリンクなどを一覧に掲載できるページを準備しています。
            お互いのフォロワーが増えたり、Discordの外でもゆるくつながれるきっかけになれば、という企画です。
            もちろん、公開したくない方はしなくてOK。掲載は任意・いつでも変更できる仕組みにする予定です。
          </p>
          <a
            href="/#pricing"
            className="mt-9 inline-block rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-[var(--color-ink)]"
          >
            トップページへ戻る
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
