const problems = [
  {
    icon: "😅",
    title: "口コミをお願いするのが気まずい",
    description:
      "直接頼むのは押し付けがましくて……と思うと、なかなか言い出せない。",
  },
  {
    icon: "📉",
    title: "Googleの口コミがなかなか増えない",
    description:
      "新規集客に欠かせないのに、口コミ数で競合サロンに差をつけられている。",
  },
  {
    icon: "📱",
    title: "SNSに投稿してもらえない",
    description:
      "「ぜひ投稿してね」と伝えても、実際にしてくれるお客様はごくわずか。",
  },
  {
    icon: "⏰",
    title: "口コミ促進に時間を割けない",
    description:
      "施術で手一杯。口コミ集めまで手が回らず、後回しになってしまう。",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          こんなお悩み、ありませんか？
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-3 text-3xl">{problem.icon}</div>
              <h3 className="mb-2 font-bold text-gray-900">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
