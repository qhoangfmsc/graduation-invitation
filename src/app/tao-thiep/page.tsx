"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateInvitationPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    router.push(`/?invited=${encodeURIComponent(trimmed)}`);
  };

  return (
    <section className="relative flex min-h-dvh w-full flex-1 items-center justify-center overflow-hidden bg-(--maroon-950) px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(204,159,95,0.14),transparent_60%)]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-95 rounded-[3px] border border-(--gold)/30 bg-linear-to-b from-(--maroon-900) via-(--maroon-950) to-(--maroon-900) px-6 py-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)] sm:px-8"
      >
        <p className="text-center font-jost text-[10px] uppercase tracking-[0.4em] text-(--gold-soft)">
          Tạo thiệp mời
        </p>

        <h1 className="mt-3 text-center font-script text-2xl text-(--cream) sm:text-3xl">
          Nhập tên người bạn mà Nai muốn mời
        </h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ví dụ: Nguyễn Hoàng Nguyên"
          autoFocus
          className="mt-6 w-full rounded-[2px] border border-(--gold)/30 bg-(--maroon-950)/60 px-4 py-3 text-center font-jost text-sm text-(--cream) placeholder:text-(--cream-dim)/50 outline-none focus:border-(--gold-soft)"
        />

        <button
          type="submit"
          disabled={!name.trim()}
          className="mt-6 w-full rounded-[2px] border border-(--gold)/50 bg-(--gold)/10 py-3 font-jost text-[11px] uppercase tracking-[0.3em] text-(--gold-soft) transition-colors hover:bg-(--gold)/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Tạo thiệp mời
        </button>
      </form>
    </section>
  );
}
