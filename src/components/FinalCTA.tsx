import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  FileText,
  Globe,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import { useAuthStore } from "../stores/authStore";

const FinalCTA = () => {
  const { isAuthenticated } = useAuthStore();

  const ctaHref = isAuthenticated ? "/app" : "/register";
  const ctaLabel = isAuthenticated
    ? "Buka Dashboard"
    : "Mulai bikin CV sekarang";

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-900 shadow-2xl shadow-violet-200/50">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-28 -top-32 size-96 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-12 -top-16 size-64 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-28 size-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-0 size-80 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative grid items-center gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-16 lg:py-20">
          {/* CTA Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-violet-100 backdrop-blur-sm sm:text-sm">
              <Sparkles size={16} />
              Saatnya mempersiapkan langkah berikutnya
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Peluang baru bisa dimulai dari CV yang lebih siap.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-violet-100 sm:text-base sm:leading-8">
              Kamu nggak harus punya semuanya sekarang. Mulai dari
              pendidikan, pengalaman, proyek, dan skill yang kamu punya.
              Susun CV-mu bersama Foliora, lalu siapkan diri untuk peluang
              berikutnya.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={ctaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-violet-800 shadow-xl shadow-violet-950/20 transition hover:-translate-y-1 hover:bg-violet-50 sm:text-base"
              >
                {ctaLabel}

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#fitur"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
              >
                Lihat fitur Foliora
              </a>
            </div>

            {/* Reassurance */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-violet-200 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Check size={15} />
                Cocok untuk fresh graduate
              </span>

              <span className="inline-flex items-center gap-2">
                <Check size={15} />
                Mulai dari CV-mu
              </span>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* Resume Preview */}
            <div className="relative rotate-[-2deg] rounded-3xl border border-white/20 bg-white p-5 shadow-2xl shadow-indigo-950/30 transition duration-300 hover:rotate-0 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <FileText size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      Resume Preview
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Your professional story
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                  Ready
                </span>
              </div>

              {/* Example Resume */}
              <div className="mt-5 border-b-2 border-violet-700 pb-4 text-center">
                <div className="text-xl font-extrabold tracking-tight text-slate-900">
                  Nama Kamu
                </div>

                <p className="mt-1.5 text-xs font-semibold text-violet-700">
                  Professional Title
                </p>

                <p className="mt-2 text-[10px] text-slate-500">
                  email@example.com · Indonesia
                </p>
              </div>

              <div className="mt-5 space-y-5">
                {[
                  {
                    title: "PROFESSIONAL SUMMARY",
                    widths: ["100%", "92%", "65%"],
                  },
                  {
                    title: "EXPERIENCE",
                    widths: ["85%", "100%", "72%"],
                  },
                  {
                    title: "PROJECTS",
                    widths: ["100%", "80%"],
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="border-b border-slate-200 pb-1.5 text-[9px] font-extrabold tracking-wider text-slate-800">
                      {item.title}
                    </p>

                    <div className="mt-2.5 space-y-2">
                      {item.widths.map((width, index) => (
                        <div
                          key={index}
                          className="h-1.5 rounded-full bg-slate-100"
                          style={{ width }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visibility Indicator */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700">
                    <Globe size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800">
                      CV Public / Private
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      Kamu yang mengatur visibilitasnya
                    </p>
                  </div>
                </div>

                <LockKeyhole
                  size={17}
                  className="shrink-0 text-violet-700"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-3.5 shadow-xl shadow-indigo-950/10 sm:-left-6 sm:p-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Check size={22} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                  Satu langkah lebih siap
                </p>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Build your career story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
