"use client";

import Image from "next/image";
import { useState } from "react";

const particles = Array.from({ length: 18 });

const features = [
  {
    title: "AI Systems",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M9 3v18M15 3v18M5 8h14M5 16h14"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M7 5h10v14H7z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Digital Platforms",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 4 3 9l9 5 9-5-9-5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="m3 14 9 5 9-5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Secure Infrastructure",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 3 5 6v5c0 4.5 2.9 8.4 7 10 4.1-1.6 7-5.5 7-10V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M9.5 12.5h5M12 10v5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Home() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  return (
    <main
      onPointerMove={(event) => {
        setCursor({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-12 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(520px circle at ${cursor.x}% ${cursor.y}%, rgba(16,185,129,0.16), transparent 48%)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, transparent 0%, rgba(0,0,0,0.10) 38%, rgba(0,0,0,0.68) 100%)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] animate-grid-drift" />

      <div className="absolute left-1/2 top-[38%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(16,185,129,0.14),transparent,transparent)] opacity-40 blur-sm animate-radar-sweep" />

      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/10 animate-soft-pulse" />
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-slow-spin" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[150px]" />

      <div className="absolute bottom-[-260px] left-1/2 h-[430px] w-[1100px] -translate-x-1/2 rounded-[100%] border-t border-emerald-300/25 bg-emerald-400/10 blur-[1px] animate-horizon-breathe" />
      <div className="absolute bottom-[-250px] left-1/2 h-[390px] w-[980px] -translate-x-1/2 rounded-[100%] bg-emerald-400/8 blur-[70px]" />

      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-emerald-300/40 animate-float-particle"
          style={{
            left: `${8 + ((index * 47) % 86)}%`,
            top: `${12 + ((index * 31) % 76)}%`,
            animationDelay: `${index * 0.7}s`,
            animationDuration: `${9 + (index % 6)}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.32)_54%,rgba(0,0,0,0.94)_100%)]" />

      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-6 flex flex-col items-center animate-logo-float">
          <div className="relative h-16 w-16 opacity-90 drop-shadow-[0_0_24px_rgba(255,255,255,0.16)]">
            <Image
              src="/logos/savvy-gorilla-white.png"
              alt="Savvy Gorilla Technologies logo"
              fill
              className="object-contain grayscale"
              priority
            />
          </div>
          <div className="mt-3 text-xs font-bold uppercase tracking-[0.35em] text-white/70">
            Savvy Gorilla
          </div>
          <div className="mt-1 text-xs font-semibold text-emerald-300/80">
            Technologies™
          </div>
        </div>

        <div className="mb-8 rounded-full border border-emerald-400/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/90 backdrop-blur animate-subtle-glow">
          System Upgrade in Progress
        </div>

        <div className="relative overflow-hidden">
          <h1 className="relative max-w-5xl text-6xl font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_0_28px_rgba(16,185,129,0.28)] sm:text-7xl md:text-8xl">
            Coming Soon
          </h1>
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_0%,transparent_42%,rgba(255,255,255,0.75)_50%,transparent_58%,transparent_100%)] opacity-30 mix-blend-overlay animate-title-shimmer" />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
          A new intelligence layer is coming soon. We are rebuilding our digital
          home into a sharper, faster, and more futuristic technology platform.
        </p>

        <div className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/40">
          Build Status: Initializing New Platform
          <span className="ml-1 inline-block animate-cursor-blink text-emerald-300">
            _
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:info@savvygorilla.tech"
            className="rounded-full border border-emerald-300/50 bg-emerald-400 px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black shadow-[0_0_45px_rgba(52,211,153,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_0_70px_rgba(52,211,153,0.55)]"
          >
            Contact Us
          </a>

          <div className="rounded-full border border-emerald-400/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-300/80 backdrop-blur">
            Launching Soon
          </div>
        </div>

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_45px_rgba(16,185,129,0.12)]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent animate-card-scan" />
              </div>

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-300 transition duration-300 group-hover:border-emerald-300/50 group-hover:bg-emerald-400/10 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.18)]">
                {item.icon}
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.08em] text-white">
                {item.title}
              </p>
              <p className="mt-3 text-xs leading-5 text-white/45 group-hover:text-white/60">
                Built for the next generation of intelligent African technology.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Savvy Gorilla Technologies · Juba · Africa
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-white/25">
            Powered by Savvy Gorilla Intelligence Systems
          </p>
        </div>
      </section>

      <style jsx global>{`
        @keyframes grid-drift {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-52px, -52px, 0);
          }
        }

        @keyframes slow-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes radar-sweep {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes soft-pulse {
          0%,
          100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(0.96);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }

        @keyframes horizon-breathe {
          0%,
          100% {
            opacity: 0.5;
            transform: translateX(-50%) scaleX(0.96);
          }
          50% {
            opacity: 0.85;
            transform: translateX(-50%) scaleX(1.03);
          }
        }

        @keyframes subtle-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(52, 211, 153, 0.08);
          }
          50% {
            box-shadow: 0 0 34px rgba(52, 211, 153, 0.22);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-90px) scale(0.4);
            opacity: 0;
          }
        }

        @keyframes cursor-blink {
          0%,
          45% {
            opacity: 1;
          }
          46%,
          100% {
            opacity: 0;
          }
        }

        @keyframes card-scan {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        @keyframes logo-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes title-shimmer {
          0%,
          82% {
            transform: translateX(-120%);
            opacity: 0;
          }
          86% {
            opacity: 0.35;
          }
          94% {
            transform: translateX(120%);
            opacity: 0.35;
          }
          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }

        .animate-grid-drift {
          animation: grid-drift 28s linear infinite;
        }

        .animate-slow-spin {
          animation: slow-spin 42s linear infinite;
        }

        .animate-radar-sweep {
          animation: radar-sweep 36s linear infinite;
        }

        .animate-soft-pulse {
          animation: soft-pulse 7s ease-in-out infinite;
        }

        .animate-horizon-breathe {
          animation: horizon-breathe 8s ease-in-out infinite;
        }

        .animate-subtle-glow {
          animation: subtle-glow 4s ease-in-out infinite;
        }

        .animate-float-particle {
          animation-name: float-particle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s steps(1) infinite;
        }

        .animate-card-scan {
          animation: card-scan 1.4s ease-in-out infinite;
        }

        .animate-logo-float {
          animation: logo-float 9s ease-in-out infinite;
        }

        .animate-title-shimmer {
          animation: title-shimmer 14s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}