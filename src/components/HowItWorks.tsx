import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Download,
  FileText,
  Globe,
  LayoutTemplate,
  LockKeyhole,
  Share2,
  Sparkles,
  Link as LinkIcon,
  type LucideIcon,
} from "lucide-react";

import Title from "./Title";
import { useAuthStore } from "../stores/authStore";

type Step = {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  visualBg: string;
  points: string[];
};

const steps: Step[] = [
  {
    number: "01",
    label: "MULAI DARI SINI",
    title: "Lengkapi informasimu",
    description:
      "Masukkan informasi diri, pendidikan, pengalaman, proyek, dan skill yang kamu punya. Nggak perlu punya pengalaman kerja bertahun-tahun untuk mulai.",
    icon: FileText,
    iconColor: "text-violet-700",
    iconBg: "bg-violet-100",
    visualBg: "bg-violet-50",
    points: [
      "Informasi pribadi",
      "Pendidikan & pengalaman",
      "Proyek & skills",
    ],
  },
  {
    number: "02",
    label: "SUSUN CV-MU",
    title: "Buat CV lebih terstruktur",
    description:
      "Pilih template yang sesuai, rapikan isi CV, dan lihat perubahan melalui preview. Kamu bisa fokus pada informasi penting tanpa mendesain dari nol.",
    icon: LayoutTemplate,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
    visualBg: "bg-blue-50",
    points: [
      "Template profesional",
      "Live preview",
      "Edit sesuai kebutuhan",
    ],
  },
  {
    number: "03",
    label: "KAMU YANG TENTUKAN",
    title: "Bagikan CV dengan caramu",
    description:
      "Atur CV menjadi Public atau Private. Saat Public, bagikan link CV kepada recruiter. Kamu juga bisa mengunduhnya sebagai PDF untuk melengkapi lamaranmu.",
    icon: Share2,
    iconColor: "text-emerald-700",
    iconBg: "bg-emerald-100",
    visualBg: "bg-emerald-50",
    points: [
      "Pilih Public atau Private",
      "Bagikan link CV ke recruiter",
      "Download CV sebagai PDF",
    ],
  },
];

const HowItWorks = () => {
  const { isAuthenticated } = useAuthStore();

  const ctaHref = isAuthenticated ? "/app" : "/register";
  const ctaLabel = isAuthenticated
    ? "Buka Dashboard"
    : "Mulai bikin CV";

  return (
    <section
      id="cara-kerja"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 size-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <Title
            section="CARA KERJA"
            title="Dari bingung bikin CV jadi lebih siap melamar."
            description="Nggak perlu ribet. Mulai dari informasi yang kamu punya, susun CV dengan lebih terarah, lalu pilih cara terbaik untuk membagikan dokumen kariermu."
          />
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60"
              >
                {/* ================= VISUAL AREA ================= */}
                <div
                  className={`relative flex h-52 items-center justify-center overflow-hidden ${step.visualBg}`}
                >
                  {/* Decorative Circles */}
                  <div className="pointer-events-none absolute -right-8 -top-10 size-36 rounded-full border border-current opacity-[0.07]" />

                  <div className="pointer-events-none absolute -bottom-14 -left-8 size-40 rounded-full border border-current opacity-[0.07]" />

                  {/* Step Number */}
                  <span className="absolute left-5 top-5 text-sm font-extrabold tracking-widest text-slate-400/80">
                    STEP {step.number}
                  </span>

                  {/* Step 01: Personal Information */}
                  {step.number === "01" && (
                    <div className="relative w-64 max-w-[85%] rotate-[-2deg] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-300/30 transition duration-300 group-hover:rotate-0">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                          <FileText size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-800">
                            Profil kamu
                          </p>

                          <p className="text-[10px] text-slate-400">
                            Lengkapi informasi
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          "Informasi pribadi",
                          "Pendidikan",
                          "Pengalaman & proyek",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-2.5 rounded-lg border border-slate-100 p-2.5"
                          >
                            <div
                              className={`flex size-6 items-center justify-center rounded-md ${
                                index === 0
                                  ? "bg-violet-100 text-violet-700"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              <Check size={13} />
                            </div>

                            <span className="text-[10px] font-medium text-slate-600">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 02: Resume Preview */}
                  {step.number === "02" && (
                    <div className="relative w-52 rotate-[2deg] rounded-xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-300/30 transition duration-300 group-hover:rotate-0">
                      <div className="border-b-2 border-violet-600 pb-3 text-center">
                        <div className="mx-auto h-3 w-28 rounded bg-slate-800" />

                        <div className="mx-auto mt-2 h-1.5 w-20 rounded bg-violet-200" />

                        <div className="mx-auto mt-2 h-1 w-32 max-w-full rounded bg-slate-100" />
                      </div>

                      <div className="mt-4 space-y-3">
                        {[
                          {
                            title: "PROFESSIONAL SUMMARY",
                            count: 2,
                          },
                          {
                            title: "EXPERIENCE",
                            count: 3,
                          },
                          {
                            title: "EDUCATION",
                            count: 2,
                          },
                        ].map((item) => (
                          <div key={item.title}>
                            <p className="border-b border-slate-200 pb-1 text-[6px] font-extrabold tracking-wider text-slate-700">
                              {item.title}
                            </p>

                            <div className="mt-1.5 space-y-1">
                              {Array.from({
                                length: item.count,
                              }).map((_, index) => (
                                <div
                                  key={index}
                                  className="h-1 rounded bg-slate-100"
                                  style={{
                                    width:
                                      index === item.count - 1
                                        ? "65%"
                                        : "100%",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="absolute -right-6 top-14 flex size-11 items-center justify-center rounded-xl border border-violet-100 bg-white text-violet-700 shadow-md">
                        <LayoutTemplate size={20} />
                      </div>
                    </div>
                  )}

                  {/* Step 03: Public / Private + Shareable Link */}
                  {step.number === "03" && (
                    <div className="relative w-64 max-w-[90%] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-300/30 transition duration-300 group-hover:-translate-y-1">
                      {/* Visibility Settings */}
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                          <Globe size={21} />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-800">
                            Visibilitas CV
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-500">
                            Atur siapa yang bisa melihat
                          </p>
                        </div>
                      </div>

                      {/* Public Option */}
                      <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                        <div className="flex items-center gap-2.5">
                          <Globe
                            size={17}
                            className="text-emerald-700"
                          />

                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              Public
                            </p>

                            <p className="text-[10px] text-slate-500">
                              Bisa diakses lewat link
                            </p>
                          </div>
                        </div>

                        <div className="flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      </div>

                      {/* Private Option */}
                      <div className="mt-2 flex items-center justify-between rounded-xl border border-slate-100 p-3">
                        <div className="flex items-center gap-2.5">
                          <LockKeyhole
                            size={17}
                            className="text-slate-500"
                          />

                          <div>
                            <p className="text-xs font-bold text-slate-700">
                              Private
                            </p>

                            <p className="text-[10px] text-slate-400">
                              Tidak ditampilkan secara publik
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Shareable Link */}
                      <div className="mt-4 rounded-xl bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold text-slate-500">
                          LINK CV KAMU
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white text-violet-700">
                            <LinkIcon size={14} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[10px] font-medium text-slate-600">
                              foliora.com/view/your-resume
                            </p>
                          </div>

                          <Share2
                            size={15}
                            className="shrink-0 text-violet-700"
                          />
                        </div>
                      </div>

                      {/* Floating PDF Badge */}
                      <div className="absolute -right-3 -top-4 flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-700 shadow-md">
                        <Download
                          size={14}
                          className="text-emerald-600"
                        />
                        PDF Ready
                      </div>
                    </div>
                  )}
                </div>

                {/* ================= CARD CONTENT ================= */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Icon & Label */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl ${step.iconBg} ${step.iconColor}`}
                    >
                      <Icon size={20} strokeWidth={1.9} />
                    </div>

                    <span className="text-[10px] font-extrabold tracking-[0.12em] text-slate-400 sm:text-xs">
                      {step.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-auto space-y-3 border-t border-slate-100 pt-5">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5"
                      >
                        <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check size={10} strokeWidth={3} />
                        </div>

                        <span className="text-xs font-medium text-slate-600">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-800 via-violet-700 to-indigo-700 p-6 sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-4 -top-12 size-40 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
                <Sparkles size={14} />
                Nggak perlu menunggu sempurna
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                CV siap, tinggal pilih cara membagikannya.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-violet-100 sm:text-base">
                Bagikan CV melalui link saat ingin recruiter melihatnya,
                atau download sebagai PDF untuk melengkapi lamaranmu.
                Kamu yang menentukan bagaimana CV-mu dibagikan.
              </p>
            </div>

            <Link
              to={ctaHref}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-violet-800 shadow-lg transition hover:-translate-y-1 hover:bg-violet-50"
            >
              {ctaLabel}

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Supporting Note */}
        <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs leading-6 text-slate-400">
          <ClipboardCheck size={15} />
          Periksa kembali isi CV dan pengaturan visibilitas sebelum membagikannya.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
