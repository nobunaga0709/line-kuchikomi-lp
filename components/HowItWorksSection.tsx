const steps = [
  {
    step: "01",
    title: "施術後にLINEを自動送信",
    description:
      "施術完了のタイミングで、お客様のLINEに感謝メッセージ＋口コミ依頼が自動で届きます。",
    icon: "📲",
  },
  {
    step: "02",
    title: "ボタンをタップするだけ",
    description:
      "LINEメッセージのボタンを押すと、Googleマップのレビューページに直接ジャンプ。投稿のハードルを最大限に下げます。",
    icon: "👆",
  },
  {
    step: "03",
    title: "口コミが自然に増える",
    description:
      "お客様は書きやすい状態でレビューページに到達。良い口コミが積み重なり、新規集客につながります。",
    icon: "📈",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          仕組みはシンプルな3ステップ
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-[#06c755]/20 sm:block" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="relative flex gap-6">
                <div className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-[#06c755] text-white shadow-md">
                  <span className="text-xs font-bold opacity-80">STEP</span>
                  <span className="text-lg font-bold leading-none">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
