export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow effects */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

      {/* Noise / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.95)_100%)]" />

      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70 backdrop-blur">
          System Upgrade in Progress
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          Savvy Gorilla Technologies
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
          A new intelligence layer is coming soon. We are rebuilding our digital
          home into a sharper, faster, and more futuristic technology platform.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:info@savvygorilla.tech"
            className="rounded-full border border-emerald-400/40 bg-emerald-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(52,211,153,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Contact Us
          </a>

          <div className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm text-white/60 backdrop-blur">
            Launching Soon
          </div>
        </div>

        <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {[
            "AI Systems",
            "Digital Platforms",
            "Secure Infrastructure",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <p className="text-sm font-medium text-white">{item}</p>
              <p className="mt-2 text-xs leading-5 text-white/45">
                Built for the next generation of intelligent African technology.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-xs uppercase tracking-[0.3em] text-white/35">
          Savvy Gorilla Technologies · Juba · Africa
        </p>
      </section>
    </main>
  );
}