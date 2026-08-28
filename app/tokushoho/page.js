import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "特定商取引法に基づく表記｜SMILE LABO by 信頼発電所",
  description: "SMILE LABOを運営する株式会社ジェイ・アール・イーコーポレイションの特定商取引法に基づく表記です。",
};

const ROWS = [
  { k: "販売事業者", v: "株式会社ジェイ・アール・イーコーポレイション" },
  { k: "会社法人番号", v: "7120001085526" },
  { k: "インボイス登録番号", v: "T7120001085526" },
  { k: "運営統括責任者", v: "村上 直樹" },
  { k: "所在地", v: "〒543-0052　大阪市天王寺区大道4丁目5番9号" },
  {
    k: "電話番号",
    v: "06-6777-2775（携帯：090-5044-7799）　受付時間：平日 9:00〜18:00",
  },
  { k: "メールアドレス", v: "お問い合わせフォームよりご連絡ください" },
  {
    k: "提供するサービス",
    v: "SMILE LABO会員権の提供、車オークション仕入れ代行、賃貸仲介、古民家民泊の招待、陸送手配、遺品整理・不用品の紹介、Discordコミュニティの提供、その他関連する各種お申込み手続き。",
  },
  {
    k: "販売価格",
    v: "フルメンバー：120,000円（税込・買い切り）。その他プランは申込画面に表示する価格によります。",
  },
  { k: "商品代金以外の必要料金", v: "振込手数料・決済手数料等が発生する場合は、お申込み画面にその都度表示いたします。" },
  { k: "お支払い方法", v: "クレジットカード決済、銀行振込、その他画面に表示する決済方法（各種キャッシュレス決済を含みます）" },
  { k: "お支払い時期", v: "お申込み・ご予約の確定時に都度決済となります。" },
  { k: "サービス提供時期", v: "お申込み確定後、担当者より速やかにご連絡のうえ、各特典をご案内いたします。" },
  {
    k: "キャンセル・返金について",
    v: "サービスの性質上、提供開始後のご都合による返金はお受けできません。システム障害など当社の責めに帰すべき事由によりサービスを提供できなかった場合は、お支払いいただいた金額の全額を返金いたします。",
  },
  {
    k: "免許・登録",
    v: "宅地建物取引業：大阪府知事（9）33136号／住宅宿泊管理業：国土交通大臣（01）第F03015号／古物商：大阪府公安委員会 第62110R021865号",
  },
];

export default function Tokushoho() {
  return (
    <>
      <Header />
      <main className="py-16 md:py-24">
        <div className="wrap max-w-3xl">
          <span className="chip mb-4">LEGAL NOTICE</span>
          <h1 className="font-display text-2xl font-800 md:text-3xl">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            特定商取引に関する法律第11条に基づき、以下のとおり表示いたします。SMILE LABOは
            株式会社ジェイ・アール・イーコーポレイションが運営しています。
          </p>

          <div className="neon-card mt-10 divide-y divide-white/10">
            {ROWS.map((r) => (
              <div key={r.k} className="grid gap-1 p-5 md:grid-cols-[200px_1fr] md:gap-6">
                <dt className="text-sm font-bold text-[var(--color-cyan)]">{r.k}</dt>
                <dd className="text-sm leading-relaxed text-[var(--color-muted)]">{r.v}</dd>
              </div>
            ))}
          </div>

          <a href="/" className="mt-8 inline-block text-sm font-semibold text-[var(--color-cyan)] underline">
            ← トップページへ戻る
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
