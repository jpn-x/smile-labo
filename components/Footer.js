export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04050d] py-12 text-sm text-[var(--color-muted)]">
      <div className="wrap grid gap-10 md:grid-cols-4">
        <div>
          <span className="font-display text-lg font-800 neon-text-pink">SMILE LABO</span>
          <p className="mt-3 max-w-[260px] text-xs leading-relaxed">
            株式会社ジェイ・アール・イーコーポレイションが運営する、30〜40代のための会員制コミュニティです。
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold text-white">サイト内</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#about" className="hover:text-white">Smile Laboとは</a></li>
            <li><a href="#benefits" className="hover:text-white">できること</a></li>
            <li><a href="#pricing" className="hover:text-white">料金</a></li>
            <li><a href="#faq" className="hover:text-white">よくある質問</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold text-white">会社情報</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="/tokushoho/" className="hover:text-white">特定商取引法に基づく表記</a></li>
            <li><a href="/members/" className="hover:text-white">メンバーズページ</a></li>
            <li><a href="https://search.jreco.net/company" target="_blank" rel="noopener" className="hover:text-white">運営会社について</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold text-white">お問い合わせ</h4>
          <ul className="space-y-2 text-xs">
            <li>TEL: 06-6777-2775（平日9:00〜18:00）</li>
            <li>携帯: 090-5044-7799</li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 text-[11px]">
        <span>&copy; 2026 株式会社ジェイ・アール・イーコーポレイション</span>
        <span>宅地建物取引業：大阪府知事（9）33136号</span>
      </div>
    </footer>
  );
}
