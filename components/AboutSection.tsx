export default function AboutSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          開発者について
        </h2>
        <div className="rounded-2xl bg-gray-50 p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#06c755]/10 text-3xl">
              👤
            </div>
            <div>
              <div className="font-bold text-gray-900">開発者</div>
              <div className="text-sm text-gray-500">フリーランスエンジニア</div>
            </div>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              はじめまして。私は中小企業・個人事業主の方々の集客課題を解決するツールを開発しています。
            </p>
            <p>
              美容サロンのオーナーさんから「口コミをお願いするのが気まずい」「でも口コミがないと新規のお客様に来てもらえない」というお悩みを聞き、このツールを開発しました。
            </p>
            <p>
              まずは少人数の先行パートナーと一緒に、本当に使えるものを作り上げていきたいと思っています。先行パートナーの方には、機能要望を直接お伝えいただく機会もご用意します。
            </p>
            <p className="font-medium text-gray-900">
              正直にお伝えすると、まだ開発中のプロダクトです。でもだからこそ、使ってくださる方の声を最大限に反映できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
