"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type InvitationData = {
  name: string;
  schoolLine: string;
  date: string;
  time: string;
  location: string;
};

export default function Invitation({
  data,
  guestName,
}: {
  data: InvitationData;
  guestName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-dvh w-full flex-1 items-center justify-center overflow-hidden bg-(--maroon-950) px-4 py-12">
      <BackgroundDecor />

      <div className="relative z-10 grid w-full max-w-95 place-items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Xem thiệp mời"
          tabIndex={open ? -1 : 0}
          className={`col-start-1 row-start-1 flex w-full flex-col items-center gap-8 transition-all duration-700 ease-out ${
            open
              ? "pointer-events-none scale-90 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <p className="font-script text-2xl text-(--cream-dim)">
            Tui sắp tốt nghiệp rùi kkk
          </p>
          <h1 className="text-center font-brother-sign text-[56px] leading-tight text-(--cream) sm:text-[46px]">
            {data.name}
          </h1>

          <PhotoboothStrip />

          <p className="font-script text-2xl text-(--gold-soft) sm:text-3xl">
            Thân mời {guestName || "cục cưng"} đến dự lễ tốt nghiệp
          </p>

          <p className="animate-hint-pulse font-jost text-[11px] uppercase tracking-[0.35em] text-(--gold-soft)">
            Chạm để xem thiệp mời
          </p>
        </button>

        <div
          className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-6 scale-95 opacity-0"
          }`}
        >
          <InvitationCard
            data={data}
            guestName={guestName}
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </section>
  );
}

function InvitationCard({
  data,
  guestName,
  open,
  onClose,
}: {
  data: InvitationData;
  guestName?: string;
  open: boolean;
  onClose: () => void;
}) {
  const lines = [
    { label: "Ngày", value: data.date },
    { label: "Giờ", value: data.time },
    { label: "Địa điểm", value: data.location },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-[3px] border border-(--gold)/30 bg-linear-to-b from-(--maroon-900) via-(--maroon-950) to-(--maroon-900) px-6 pb-7 pt-7 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)] sm:px-8">
      <CornerOrnament className="left-2 top-2" />
      <CornerOrnament className="right-2 top-2 rotate-90" />
      <CornerOrnament className="bottom-2 left-2 -rotate-90" />
      <CornerOrnament className="bottom-2 right-2 rotate-180" />

      <FadeChild open={open} delay={0}>
        <p className="text-center font-jost text-[10px] uppercase tracking-[0.4em] text-(--gold-soft)">
          Chúc mừng tốt nghiệp
        </p>
      </FadeChild>

      <FadeChild open={open} delay={80}>
        <h1 className="mt-2 text-center font-script text-[26px] leading-tight text-(--cream) sm:text-[30px]">
          {data.name}
        </h1>
      </FadeChild>

      <FadeChild
        open={open}
        delay={180}
        className="mt-6 flex items-center justify-center gap-3"
      >
        <span className="h-px w-10 bg-(--gold)/40" />
        <span className="text-(--gold-soft)">✦</span>
        <span className="h-px w-10 bg-(--gold)/40" />
      </FadeChild>

      <FadeChild open={open} delay={240}>
        <p className="mt-4 text-center font-playfair text-sm italic text-(--cream-dim)">
          {data.schoolLine}
        </p>
      </FadeChild>

      {guestName && (
        <FadeChild open={open} delay={300} className="mt-4 text-center">
          <p className="font-script text-lg text-(--cream) sm:text-xl">
            Mời <span className="text-(--gold-soft)">{guestName}</span> đến
            tham dự lễ tốt nghiệp
          </p>
        </FadeChild>
      )}

      <div className="mt-6 space-y-2.5">
        {lines.map((line, i) => (
          <FadeChild key={line.label} open={open} delay={370 + i * 70}>
            <div className="flex items-baseline justify-center gap-2 font-jost text-[13px] text-(--cream)">
              <span className="uppercase tracking-[0.2em] text-(--gold-soft)">
                {line.label}
              </span>
              <span className="text-(--cream-dim)">·</span>
              <span>{line.value}</span>
            </div>
          </FadeChild>
        ))}
      </div>

      <FadeChild open={open} delay={610} className="mt-7 text-center">
        <p className="font-script text-xl text-(--gold-soft)">
          Rất mong được đón tiếp bạn
        </p>
      </FadeChild>

      <FadeChild open={open} delay={670} className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={onClose}
          className="font-jost text-[10px] uppercase tracking-[0.3em] text-(--cream-dim)/70 transition-colors hover:text-(--gold-soft)"
        >
          Đóng thiệp lại
        </button>
      </FadeChild>
    </div>
  );
}

const STRIP_SHOTS = [
  { src: "/photo-1.jpg" },
  { src: "/photo-2.jpg" },
  { src: "/photo-3.jpg" },
  { src: "/photo-4.jpg" },
] as const;

const STRIP_SLIDE_STEPS = 7;
const STRIP_STEP_INTERVAL_MS = 350;
const STRIP_STEP_DURATION_MS = 480;
const STRIP_START_DELAY_MS = 400;

function PhotoboothStrip() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= STRIP_SLIDE_STEPS; i++) {
      timeouts.push(
        setTimeout(
          () => setStep(i),
          STRIP_START_DELAY_MS + (i - 1) * STRIP_STEP_INTERVAL_MS,
        ),
      );
    }
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const translateY = -100 + (step / STRIP_SLIDE_STEPS) * 100;

  return (
    <div className="relative mx-auto w-[50%]">
      <Image
        src="/photobooth_output_slot.png"
        alt="Khay xuất ảnh"
        width={464}
        height={1183}
        className="pointer-events-none h-auto w-full select-none"
        priority
      />

      <div
        className="absolute overflow-hidden"
        style={{ left: "28%", right: "27%", top: "10%", bottom: "9%" }}
      >
        <div
          className="flex h-full flex-col justify-end transition-transform ease-out"
          style={{
            transform: `translateY(${translateY}%)`,
            transitionDuration: `${STRIP_STEP_DURATION_MS}ms`,
          }}
        >
          <div className="flex flex-col grayscale border-black border-6">
            {STRIP_SHOTS.map((shot, i) => (
              <div key={shot.src} className="relative aspect-10/9">
                {i > 0 && (
                  <div className="absolute inset-x-0 top-0 z-10 h-0.75 bg-black" />
                )}
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-l border-t border-(--gold)/50 ${className}`}
    />
  );
}

function FadeChild({
  open,
  delay,
  className = "",
  children,
}: {
  open: boolean;
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className} transition-all duration-500 ease-out ${
        open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      style={{ transitionDelay: open ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function BackgroundDecor() {
  const sparkles = Array.from({ length: 14 }, (_, i) => i);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(204,159,95,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,0,0,0.55),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {sparkles.map((i) => {
          const left = (i * 37) % 100;
          const duration = 8 + (i % 5) * 2;
          const delay = (i % 7) * 1.3;
          const drift = ((i % 3) - 1) * 30;
          return (
            <span
              key={i}
              className="animate-sparkle absolute bottom-0 block h-1 w-1 rounded-full bg-(--gold-soft)"
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                ["--drift" as string]: `${drift}px`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
