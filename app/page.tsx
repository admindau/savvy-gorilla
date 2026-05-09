"use client";

import { useState } from "react";

const particles = Array.from({ length: 18 });

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(420px circle at ${cursor.x}% ${cursor.y}%, rgba(16,185,129,0.16), transparent 45%)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] animate-grid-drift" />

      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/10 animate-soft-pulse" />
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-slow-spin" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[150px]" />
      <div className="absolute bottom-[-160px] left-1/2 h-[320px] w-[950px] -translate-x-1/2 rounded-[100%] border-t border-emerald-400/30 bg-emerald-400/10 blur-[2px]" />

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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_54%,rgba(0,0,0,0.96)_100%)]" />

      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-8 rounded-full border border-emerald-400/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/90 backdrop-blur animate-subtle-glow">
          System Upgrade in Progress
        </div>

        <h1 className="max-w-5xl text-6xl font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_0_28px_rgba(16,185,129,0.28)] sm:text-7xl md:text-8xl">
          Coming Soon
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
          A new intelligence layer is coming soon. We are rebuilding our digital
          home into a sharper, faster, and more futuristic technology platform.
        </p>

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
          {["AI Systems", "Digital Platforms", "Secure Infrastructure"].map(
            (item) => (
              <div
                key={item}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_45px_rgba(16,185,129,0.12)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-white">
                  {item}
                </p>
                <p className="mt-3 text-xs leading-5 text-white/45 group-hover:text-white/60">
                  Built for the next generation of intelligent African technology.
                </p>
              </div>
            )
          )}
        </div>

        <p className="mt-14 text-xs uppercase tracking-[0.35em] text-white/35">
          Savvy Gorilla Technologies · Juba · Africa
        </p>
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

        .animate-grid-drift {
          animation: grid-drift 28s linear infinite;
        }

        .animate-slow-spin {
          animation: slow-spin 42s linear infinite;
        }

        .animate-soft-pulse {
          animation: soft-pulse 7s ease-in-out infinite;
        }

        .animate-subtle-glow {
          animation: subtle-glow 4s ease-in-out infinite;
        }

        .animate-float-particle {
          animation-name: float-particle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </main>
  );
}