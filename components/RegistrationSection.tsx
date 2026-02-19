"use client";

import { useState } from "react";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    salonName: "",
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "登録に失敗しました");
      }

      setStatus("success");
      setFormData({ salonName: "", name: "", email: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "登録に失敗しました。再度お試しください。"
      );
    }
  };

  return (
    <section id="register" className="bg-[#06c755] px-4 py-16">
      <div className="mx-auto max-w-lg">
        <div className="mb-2 text-center text-sm font-bold text-white/80">
          先行パートナー限定オファー
        </div>
        <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
          無料で先行登録する
        </h2>
        <p className="mb-8 text-center text-sm leading-relaxed text-white/80">
          先行パートナーには、正式リリース後も特別価格でご提供します。
          <br />
          5店舗限定で募集中です。今すぐご登録ください。
        </p>

        {status === "success" ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="mb-4 text-5xl">🎉</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              登録完了しました！
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              ご登録ありがとうございます。
              <br />
              詳細は後日メールにてご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
          >
            <div className="mb-4">
              <label
                htmlFor="salonName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                サロン名 <span className="text-red-500">*</span>
              </label>
              <input
                id="salonName"
                name="salonName"
                type="text"
                required
                placeholder="例：ヘアサロン〇〇"
                value={formData.salonName}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#06c755] focus:ring-2 focus:ring-[#06c755]/20"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="例：田中 太郎"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#06c755] focus:ring-2 focus:ring-[#06c755]/20"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="例：example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#06c755] focus:ring-2 focus:ring-[#06c755]/20"
              />
            </div>

            {status === "error" && (
              <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[#06c755] py-4 text-base font-bold text-white shadow transition hover:bg-[#05a847] disabled:opacity-60 active:scale-95"
            >
              {status === "loading" ? "送信中..." : "先行登録する（無料）"}
            </button>
            <p className="mt-3 text-center text-xs text-gray-400">
              スパムメールは送りません。個人情報は適切に管理します。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
