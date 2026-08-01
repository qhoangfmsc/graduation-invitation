"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_VOLUME = 0.12;

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = MUSIC_VOLUME;
    audio.play().catch(() => {});

    const events = ["pointerdown", "touchstart", "keydown", "click"] as const;
    const stopListening = () =>
      events.forEach((event) => window.removeEventListener(event, unlock));

    const unlock = () => {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setPlaying(true);
          stopListening();
        })
        .catch(() => {});
    };

    events.forEach((event) => window.addEventListener(event, unlock));
    return stopListening;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.muted || audio.paused) {
      audio.muted = false;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/theme.mp3"
        loop
        autoPlay
        muted
        preload="auto"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Tắt nhạc nền" : "Bật nhạc nền"}
        className="fixed top-4 right-4 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-(--maroon-900)/80 text-(--gold-soft) ring-1 ring-(--gold)/30 backdrop-blur transition-transform hover:scale-105"
      >
        {playing ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
      </button>
    </>
  );
}

function SpeakerOnIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
      <path
        d="M15.5 8.5a5 5 0 0 1 0 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18.3 5.7a9.5 9.5 0 0 1 0 12.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
      <path
        d="M15.5 9.5l5 5M20.5 9.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
