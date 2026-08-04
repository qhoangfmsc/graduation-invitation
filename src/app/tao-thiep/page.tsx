"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateInvitationPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setLink(
      `${window.location.origin}/?invited=${encodeURIComponent(trimmed)}`,
    );
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!link) return;
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreview = () => {
    if (!link) return;
    router.push(link.slice(window.location.origin.length));
  };

  return (
    <section className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden bg-(--maroon-950) px-4 py-[clamp(0.5rem,4dvh,3rem)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(204,159,95,0.14),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-95 rounded-[3px] border border-(--gold)/30 bg-linear-to-b from-(--maroon-900) via-(--maroon-950) to-(--maroon-900) px-6 py-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)] sm:px-8">
        <p className="font-jost text-center text-[10px] tracking-[0.4em] text-(--gold-soft) uppercase">
          Tạo thiệp mời
        </p>

        <h1 className="font-script mt-3 text-center text-2xl text-(--cream) sm:text-3xl">
          Nhập tên người bạn mà Nai muốn mời
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setLink(null);
            }}
            placeholder="Ví dụ: Nguyễn Hoàng Nguyên"
            autoFocus
            className="font-jost mt-6 w-full rounded-xs border border-(--gold)/30 bg-(--maroon-950)/60 px-4 py-3 text-center text-sm text-(--cream) outline-none placeholder:text-(--cream-dim)/50 focus:border-(--gold-soft)"
          />

          <button
            type="submit"
            disabled={!name.trim()}
            className="font-jost mt-6 w-full rounded-xs border border-(--gold)/50 bg-(--gold)/10 py-3 text-[11px] tracking-[0.3em] text-(--gold-soft) uppercase transition-colors hover:bg-(--gold)/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Tạo thiệp mời
          </button>
        </form>

        {link && (
          <div className="mt-6 border-t border-(--gold)/20 pt-6">
            <p className="font-jost rounded-xs border border-(--gold)/20 bg-(--maroon-950)/60 px-3 py-2 text-center text-xs break-all text-(--cream-dim)">
              {link}
            </p>

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="font-jost flex-1 rounded-xs border border-(--gold)/50 bg-(--gold)/10 py-3 text-[11px] tracking-[0.3em] text-(--gold-soft) uppercase transition-colors hover:bg-(--gold)/20"
              >
                {copied ? "Đã sao chép" : "Copy link"}
              </button>

              <button
                type="button"
                onClick={handlePreview}
                className="font-jost flex-1 rounded-xs border border-(--gold-soft)/60 bg-(--gold-soft)/15 py-3 text-[11px] tracking-[0.3em] text-(--cream) uppercase transition-colors hover:bg-(--gold-soft)/25"
              >
                Xem thử
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
