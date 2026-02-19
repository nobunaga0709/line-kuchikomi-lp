"use client";

import { useState } from "react";

const faqs = [
  {
    question: "費用はかかりますか？",
    answer:
      "先行パートナー期間中は無料でご利用いただけます。正式リリース後の料金は未定ですが、先行パートナーの方には特別価格でご提供する予定です。",
  },
  {
    question: "LINE公式アカウントは必要ですか？",
    answer:
      "はい、LINE公式アカウント（無料プランでOK）が必要です。連携の手順はご登録後に詳しくご案内します。難しい操作はありません。",
  },
  {
    question: "口コミの投稿を強制することになりませんか？",
    answer:
      "強制ではありません。お客様がLINEのボタンを押さなければ何も起きません。あくまでも「投稿したい方が投稿しやすくなる」仕組みです。不快に思われた方からのクレームを防ぐため、メッセージはやわらかいトーンで送信されます。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          よくある質問
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span
                  className={`ml-4 shrink-0 text-[#06c755] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
