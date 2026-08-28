import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { benefits, faq } from "@/data/benefits";

const COLOR_MAP = {
  cyan: { text: "text-[var(--color-cyan)]", ring: "border-[var(--color-cyan)]/40", glow: "shadow-[0_0_24px_rgba(45,227,255,0.18)]" },
  pink: { text: "text-[var(--color-pink)]", ring: "border-[var(--color-pink)]/40", glow: "shadow-[0_0_24px_rgba(255,62,200,0.18)]" },
  purple: { text: "text-[var(--color-purple)]", ring: "border-[var(--color-purple)]/40", glow: "shadow-[0_0_24px_rgba(181,123,255,0.18)]" },
  gold: { text: "text-[var(--color-gold)]", ring: "border-[var(--color-gold)]/40", glow: "shadow-[0_0_24px_rgba(255,209,102,0.18)]" },
};

const PAYMENT_URL = "https://stripe.jreco.net/pay.html?item=smilelabo-full";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="wrap flex flex-col items-center text-center">
            <span className="chip mb-6">30〜40代のための、大人のコミュニティ</span>

            <div className="relative mb-6 grid h-28 w-28 place-items-center rounded-full border-2 border-[var(--color-cyan)] text-6xl neon-text-cyan md:h-36 md:w-36 md:text-7xl">
              ☺
            </div>

            <h1 className="font-display text-4xl font-800 leading-tight tracking-tight md:text-6xl">
              <span className="neon-text-cyan">SMILE</span>{" "}
              <span className="neon-text-pink">LABO</span>
            </h1>
            <p className="mt-2 font-display text-sm text-[var(--color-purple)] md:text-base">
              by 信頼発電所
            </p>

            <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed md:text-2xl">
              笑顔でつながり、<br className="md:hidden" />
              人生をちょっと面白くする。
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              車・住まい・旅・お金の実利特典と、大人の学び場がひとつになった会員制コミュニティです。
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#pricing"
                className="glow-btn rounded-full bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-purple)] px-8 py-4 text-center text-sm font-bold text-white"
              >
                今すぐ参加枠を確保する
              </a>
              <a
                href="#benefits"
                className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-[var(--color-ink)] transition hover:border-white/40"
              >
                できることを見る
              </a>
            </div>
            <p className="mt-5 text-xs text-[var(--color-muted)]">無理な勧誘は一切ありません。</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 md:py-24">
          <div className="wrap">
            <div className="mx-auto max-w-2xl text-center">
              <span className="chip mb-4">SMILE LABOとは</span>
              <h2 className="font-display text-2xl font-800 md:text-3xl">
                「入った瞬間に、元が取れる」<br />笑顔と信頼のネットワーク
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                車、住まい、旅、お金の勉強まで。実際に使える実利特典と、一生モノのスキルが学べる場を、
                ひとつの会員権にまとめました。大阪の宅建業者・信頼発電所が持つ提携先とライセンスを、
                会員のみなさんにフルで開放するコミュニティです。派手な成功自慢の場ではなく、
                「知って得する・使って得する」を大事にしています。
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="border-t border-white/5 py-16 md:py-24">
          <div className="wrap">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <span className="chip mb-4">6つの特典</span>
              <h2 className="font-display text-2xl font-800 md:text-3xl">できること</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => {
                const c = COLOR_MAP[b.color];
                return (
                  <details key={b.title} className="faq-item neon-card group p-6 md:p-7">
                    <summary className={`flex items-start gap-4 rounded-xl ${c.glow}`}>
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border ${c.ring} text-2xl`}
                      >
                        {b.icon}
                      </span>
                      <span className="flex-1">
                        <span className="block text-base font-bold">{b.title}</span>
                        <span className={`mt-1 block text-xs font-semibold ${c.text}`}>{b.lead}</span>
                      </span>
                      <span className="faq-caret shrink-0 text-lg text-[var(--color-muted)] transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{b.desc}</p>
                    {b.note && (
                      <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted)]/70">
                        ※ {b.note}
                      </p>
                    )}
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* EHIME STAY FEATURE */}
        <section className="border-t border-white/5 py-16 md:py-24">
          <div className="wrap grid items-center gap-10 md:grid-cols-2">
            <div className="neon-card overflow-hidden">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1a1440] via-[#0c1128] to-[#06210f] p-8 text-center">
                <span className="text-5xl">🏡🌅</span>
                <p className="font-display text-sm text-[var(--color-purple)]">愛媛・伊予の隠れ家宿</p>
                <p className="text-xs text-[var(--color-muted)]">1日1組限定／瀬戸内の穏やかな風</p>
              </div>
            </div>
            <div>
              <span className="chip mb-4">会員特典スポット</span>
              <h2 className="font-display text-2xl font-800 md:text-3xl">
                愛媛の古民家に、<br className="hidden md:block" />ちょっと泊まりに行こう
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                瀬戸内・伊予にある1棟貸しの古民家宿へ、1泊分をご招待。最大8名まで泊まれるので、
                家族でも、仲間でも。住宅宿泊管理業の登録もある物件なので、運営面も安心です。
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
                <li>・1棟貸し／最大8名まで宿泊可能</li>
                <li>・1泊3万円相当をご招待</li>
                <li>・住宅宿泊管理業：国土交通大臣（01）第F03015号</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="border-t border-white/5 py-16 md:py-24">
          <div className="wrap">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <span className="chip mb-4">料金プラン</span>
              <h2 className="font-display text-2xl font-800 md:text-3xl">フルメンバー</h2>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                サブスクではありません。買い切り1回のみのお支払いです。
              </p>
            </div>

            <div className="mx-auto max-w-lg">
              <div className="neon-card glow-btn p-8 text-center md:p-10">
                <p className="text-xs font-semibold tracking-wide text-[var(--color-muted)]">
                  FULL MEMBER
                </p>
                <p className="mt-3 font-display text-5xl font-800">
                  ¥120,000
                  <span className="ml-2 text-base font-normal text-[var(--color-muted)]">
                    （税込・買い切り）
                  </span>
                </p>

                <ul className="mt-8 space-y-3 text-left text-sm">
                  {[
                    "車オークション仕入れ代行 1台",
                    "賃貸仲介手数料無料 1件（関西エリア）",
                    "愛媛の古民家宿 1泊招待",
                    "陸送手配 いつでも何度でも（3割引）",
                    "遺品整理・不用品のご相談 いつでも",
                    "株＆AI Discordコミュニティ 参加し放題",
                    "ご紹介制度あり（詳細はお申込み後にご案内）",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="neon-text-cyan">✓</span>
                      <span className="text-[var(--color-ink)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={PAYMENT_URL}
                  className="glow-btn mt-9 block rounded-full bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-purple)] py-4 text-sm font-bold text-white"
                >
                  フルメンバーで参加する
                </a>
                <a
                  href="tel:0667772775"
                  className="mt-3 block rounded-full border border-white/20 py-4 text-sm font-semibold text-[var(--color-ink)]"
                >
                  電話で相談してから決める
                </a>
                <p className="mt-4 text-[11px] text-[var(--color-muted)]">
                  クレジットカード・銀行振込・PayPay等に対応予定。詳しくは
                  <a href="/tokushoho/" className="underline"> 特定商取引法に基づく表記</a>をご確認ください。
                </p>
              </div>
              <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
                セミ会員・ミニ会員プランは近日追加予定です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-white/5 py-16 md:py-24">
          <div className="wrap">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <span className="chip mb-4">FAQ</span>
              <h2 className="font-display text-2xl font-800 md:text-3xl">よくある質問</h2>
            </div>
            <div className="mx-auto max-w-2xl space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="faq-item neon-card p-5">
                  <summary className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold md:text-base">{f.q}</span>
                    <span className="faq-caret shrink-0 text-lg text-[var(--color-muted)] transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="border-t border-white/5 py-16 md:py-24">
          <div className="wrap text-center">
            <p className="font-display neon-text-pink text-sm">Let&apos;s Join!</p>
            <h2 className="font-display mt-3 text-2xl font-800 md:text-4xl">
              人生に、もう一つの居場所を。
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
              まずは話を聞くだけでも大丈夫です。あなたのペースで、Smile Laboをのぞいてみてください。
            </p>
            <a
              href={PAYMENT_URL}
              className="glow-btn mt-8 inline-block rounded-full bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-purple)] px-10 py-4 text-sm font-bold text-white"
            >
              まずは話を聞いてみる
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
