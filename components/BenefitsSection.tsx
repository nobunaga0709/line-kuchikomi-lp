const benefits = [
  {
    icon: "🤖",
    title: "LINEで自動送信、手間ゼロ",
    description:
      "施術後のタイミングでLINEを自動配信。あなたは口コミのことを考えなくてOK。お客様にも自然な流れで届きます。",
  },
  {
    icon: "⭐",
    title: "タップひとつで口コミページへ",
    description:
      "LINEのボタンを押すだけでGoogleマップのレビューページに直接ジャンプ。投稿のハードルが限りなく下がります。",
  },
  {
    icon: "⚡",
    title: "導入はたった5分",
    description:
      "LINE公式アカウントと連携するだけ。難しい設定は不要です。テンプレートメッセージをそのまま使えます。",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          3つのベネフィット
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#06c755]/10 text-3xl">
                {benefit.icon}
              </div>
              <div className="mb-1 text-xs font-bold text-[#06c755]">
                0{index + 1}
              </div>
              <h3 className="mb-3 font-bold text-gray-900">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
