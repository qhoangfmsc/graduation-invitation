"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type InvitationData = {
  name: string;
  schoolLine: string;
  date: string;
  time: string;
  location: string[];
  phones: { number: string; label: string }[];
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
    <section className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden bg-[#ecd9c3] px-8 py-[clamp(0.5rem,4dvh,3rem)]">
      <BackgroundDecor />

      <div className="relative z-10 grid w-full max-w-95 place-items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Xem thiệp mời"
          tabIndex={open ? -1 : 0}
          className={`col-start-1 row-start-1 flex w-full flex-col items-center gap-2 transition-all duration-700 ease-out ${
            open
              ? "pointer-events-none scale-90 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <p className="font-script text-[clamp(1rem,3dvh,1.5rem)] text-(--cream-dim)">
            Tui tốt nghiệp rùi kkk
          </p>
          <h1 className="font-brother-sign text-center text-[clamp(2rem,7dvh,56px)] leading-tight text-(--cream)">
            {data.name}
          </h1>

          <PhotoboothStrip />

          <p className="font-script text-[clamp(1rem,3dvh,1.5rem)] text-(--gold-soft) sm:text-[clamp(1rem,3dvh,1.875rem)]">
            Thân mời cục cưng dự lễ tốt nghiệp
          </p>

          <p className="animate-hint-pulse font-jost text-[11px] tracking-[0.35em] text-(--gold-soft) uppercase">
            Xem thiệp mời
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
  return (
    <div className="relative w-full">
      <FadeChild
        open={open}
        delay={0}
        className="mb-3 flex items-center justify-center gap-2 text-(--gold-soft)"
      >
        <span className="text-[6px]">★</span>
        <p className="font-jost text-[8px] tracking-[0.2em] whitespace-nowrap uppercase">
          GRADUATION INVITATION
        </p>
        <span className="text-[6px]">★</span>
      </FadeChild>

      <div className="relative">
        <FadeChild
          open={open}
          delay={110}
          className="pointer-events-none absolute -top-1 -right-11 z-50 w-[36%] origin-top-right rotate-[-2deg]"
        >
          <Image
            src="/sash.png"
            alt=""
            width={600}
            height={1600}
            className="h-auto w-full select-none"
          />
        </FadeChild>

        <div className="relative z-10 rounded-[10px] bg-(--maroon-700) p-[3px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col gap-1">
            <div className="relative overflow-hidden rounded-[12px] bg-(--cream) p-4">
              <StarFrame />
              <FadeChild
                open={open}
                delay={170}
                className="font-typewriter-vl-sign leading-relaxed) text-[9px] font-bold text-[#2c1411ad]"
              >
                <div className="flex flex-row">
                  <div className="my-2 flex w-1/2 flex-col">
                    <div className="flex flex-col items-baseline justify-between gap-2 border border-[#2c14115c] px-0.5 py-1.5">
                      <div>Thân mời:</div>
                      <div className="w-full text-center text-[13px] uppercase">
                        {guestName || "Cục cưng"}
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 border border-t-0 border-[#2c14115c] px-0.5 py-1">
                      <span>Ngày:</span>
                      <span>{data.date}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 border border-t-0 border-[#2c14115c] px-0.5 py-1">
                      <span>Thời gian:</span>
                      <span>{data.time}</span>
                    </div>
                    <div className="border border-t-0 border-[#2c14115c] px-0.5 py-1">
                      <p>Địa điểm:</p>
                      {data.location.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className="border border-t-0 border-[#2c14115c] px-0.5 py-1">
                      <p>Alo:</p>
                      {data.phones.map((phone) => (
                        <p key={phone.number}>
                          {phone.number} - {phone.label}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/2" />
                </div>
              </FadeChild>
            </div>

            <div className="relative overflow-hidden rounded-[12px] bg-(--cream) px-7 pt-4 pb-6 sm:px-8">
              <StarFrame />
              <div className="flex items-center justify-center gap-6 py-3.5">
                <FadeChild open={open} delay={270} className="relative pb-1">
                  <Image
                    src="/sticker.png"
                    alt=""
                    width={100}
                    height={100}
                    className="pointer-events-none absolute -bottom-7 left-14 -z-10 w-6 rotate-12 select-none"
                  />
                  <Image
                    src="/sticker.png"
                    alt=""
                    width={70}
                    height={70}
                    className="pointer-events-none absolute -top-7 -left-4 -z-10 w-6 rotate-12 opacity-60 select-none"
                  />
                  <h2 className="font-brother-sign relative text-[44px] leading-[1.5] text-(--maroon-900)">
                    {data.name.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>
                </FadeChild>
                <FadeChild open={open} delay={330} className="w-[50%] shrink-0">
                  <PhotoSlide />
                </FadeChild>
              </div>
            </div>
          </div>
        </div>

        <FadeChild
          open={open}
          delay={90}
          className="pointer-events-none absolute top-0.5 -right-1 z-30 w-[55%] origin-top-right"
        >
          <Image
            src="/locket.png"
            alt=""
            width={900}
            height={900}
            className="h-auto w-full select-none"
          />
        </FadeChild>
      </div>

      <FadeChild open={open} delay={630} className="mt-4 text-center">
        <p className="font-jost flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] text-(--gold-soft) uppercase">
          <span className="text-[6px]">★</span>
          <span className="text-[8px] whitespace-nowrap">
            THE NEXT CHAPTER STARTS NOW
          </span>
          <span className="text-[6px]">★</span>
        </p>
        <p className="font-script mt-1 text-xs text-(--cream-dim)">2026</p>
      </FadeChild>
    </div>
  );
}

const STAR_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#6b2430' fill-opacity='.55' d='M12 7c.3 2.3 1 3.7 4 5-3 1.3-3.7 2.7-4 5-.3-2.3-1-3.7-4-5 3-1.3 3.7-2.7 4-5z'/></svg>",
  );

function StarFrame() {
  const tile = (repeat: "repeat-x" | "repeat-y") => ({
    backgroundImage: `url("${STAR_SVG}")`,
    backgroundRepeat: repeat,
    backgroundSize: "18px 18px",
    backgroundPosition: "center",
  });
  return (
    <span aria-hidden className="pointer-events-none absolute inset-1">
      <span
        className="absolute inset-x-0 top-0 mx-0 h-2.5"
        style={tile("repeat-x")}
      />
      <span
        className="absolute inset-x-0 bottom-0 mx-0 h-2.5"
        style={tile("repeat-x")}
      />
      <span
        className="absolute inset-y-0 left-0 my-3.5 w-2"
        style={tile("repeat-y")}
      />
      <span
        className="absolute inset-y-0 right-0 my-3.5 w-2"
        style={tile("repeat-y")}
      />
    </span>
  );
}

const SLIDE_PHOTOS = [
  "/slides/1.PNG",
  "/slides/2.PNG",
  "/slides/3.PNG",
  "/slides/4.PNG",
  "/slides/5.jpg",
  "/slides/6.PNG",
] as const;

function PhotoSlide() {
  const slides = [...SLIDE_PHOTOS, SLIDE_PHOTOS[0]];
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function step(current: number) {
      timeoutId = setTimeout(() => {
        const next = current + 1;
        setIndex(next);

        if (next === slides.length - 1) {
          timeoutId = setTimeout(() => {
            setInstant(true);
            setIndex(0);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => setInstant(false));
            });
            step(0);
          }, 1300);
        } else {
          step(next);
        }
      }, 1300);
    }

    step(0);
    return () => clearTimeout(timeoutId);
  }, [slides.length]);

  return (
    <div className="relative aspect-3/4 w-full overflow-hidden rounded-[3px] border-2 border-(--maroon-700)/70 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]">
      <div
        className={`flex flex-col ${instant ? "" : "transition-transform duration-700 ease-in-out"}`}
        style={{ transform: `translateY(-${(index / slides.length) * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="relative aspect-3/4 w-full shrink-0">
            <Image
              src={src}
              alt=""
              fill
              sizes="240px"
              className="object-cover contrast-105 sepia-[.2]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const STRIP_SHOTS = [
  { src: "/strip/1.JPG" },
  { src: "/strip/2.JPG" },
  { src: "/strip/3.JPG" },
  { src: "/strip/4.JPG" },
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
    <div className="relative mx-auto w-[min(50%,24dvh)]">
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
          <div className="flex flex-col border-6 border-black grayscale">
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
      <Image
        src="/background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover brightness-75"
      />
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
