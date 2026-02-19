export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white px-4 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full bg-[#06c755]/10 px-4 py-1 text-sm font-medium text-[#06c755]">
          美容サロン向け 口コミ自動化ツール
        </p>
        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
          お客様の声が、
          <br />
          <span className="text-[#06c755]">自動で</span>集まる。
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
          施術後にLINEで自動送信。
          <br className="sm:hidden" />
          お客様がタップするだけで
          <br className="sm:hidden" />
          Googleマップや各SNSに口コミが集まります。
        </p>
        <a
          href="#register"
          className="inline-block rounded-full bg-[#06c755] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#05a847] active:scale-95"
        >
          先行登録する（無料）
        </a>
        <p className="mt-4 text-sm text-gray-400">
          ※ 現在、先行パートナーを募集中です
        </p>
      </div>
    </section>
  );
}
