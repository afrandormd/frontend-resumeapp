import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  CircleCheck,
  ClipboardList,
  Download,
  FileText,
  LayoutTemplate,
  Mail,
  PanelsTopLeft,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import Title from "./Title";
import { useAuthStore } from "../stores/authStore";

type Feature = {
  number: string;
  title: string;
  description: string;
  status: string;
  available: boolean;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "Resume Builder",
    description:
      "Susun CV profesional tanpa harus mulai mendesain dari nol. Lengkapi informasi diri, pendidikan, pengalaman, proyek, dan skill dalam satu tempat.",
    status: "Tersedia sekarang",
    available: true,
    icon: FileText,
    iconColor: "text-violet-700",
    iconBackground: "bg-violet-100",
  },
  {
    number: "02",
    title: "Template CV Profesional",
    description:
      "Pilih tampilan CV yang rapi dan mudah dibaca. Fokus pada pengalaman, pendidikan, dan kemampuan yang relevan dengan pekerjaan yang kamu incar.",
    status: "Tersedia sekarang",
    available: true,
    icon: LayoutTemplate,
    iconColor: "text-blue-700",
    iconBackground: "bg-blue-100",
  },
  {
    number: "03",
    title: "Live Preview & PDF",
    description:
      "Lihat perubahan CV saat kamu mengeditnya, periksa kembali hasilnya, lalu simpan sebagai PDF untuk persiapan melamar kerja.",
    status: "Tersedia sekarang",
    available: true,
    icon: Download,
    iconColor: "text-emerald-700",
    iconBackground: "bg-emerald-100",
  },
  {
    number: "04",
    title: "Portfolio Builder",
    description:
      "Tunjukkan proyek, kemampuan, dan hasil karyamu dalam portfolio yang membantu recruiter mengenal potensimu.",
    status: "Segera hadir",
    available: false,
    icon: PanelsTopLeft,
    iconColor: "text-indigo-700",
    iconBackground: "bg-indigo-100",
  },
  {
    number: "05",
    title: "Cover Letter Builder",
    description:
      "Persiapkan surat lamaran yang lebih terarah dan sesuaikan isinya dengan posisi serta perusahaan yang kamu tuju.",
    status: "Segera hadir",
    available: false,
    icon: Mail,
    iconColor: "text-amber-700",
    iconBackground: "bg-amber-100",
  },
  {
    number: "06",
    title: "Job Application Tracker",
    description:
      "Catat lowongan yang kamu incar, pantau tahapan lamaran, dan kelola proses pencarian kerja dengan lebih terorganisir.",
    status: "Segera hadir",
    available: false,
    icon: ClipboardList,
    iconColor: "text-rose-700",
    iconBackground: "bg-rose-100",
  },
];

const Features = () => {
  const { isAuthenticated } = useAuthStore();

  const ctaHref = isAuthenticated ? "/app" : "/register";
  const ctaLabel = isAuthenticated
    ? "Buka Dashboard"
    : "Mulai bikin CV";

  return (
    <section
      id="fitur"
      className="relative scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -left-32 top-32 size-72 rounded-full bg-violet-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 size-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Title
            section="FITUR FOLIORA"
            title="Persiapan karier, satu langkah setiap kali."
            description="Mulai dari bikin CV, lalu persiapkan dokumen karier lainnya secara bertahap. Foliora dirancang untuk membantu fresh graduate dan job seeker lebih siap menghadapi proses melamar kerja."
          />
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className={`group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 sm:p-7 ${
                  feature.available
                    ? "border-slate-200 bg-white hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60"
                    : "border-slate-200 bg-slate-50/80 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100"
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 ${feature.iconBackground} ${feature.iconColor}`}
                  >
                    <Icon size={23} strokeWidth={1.9} />
                  </div>

                  <span className="pt-1 text-xs font-bold tracking-widest text-slate-300">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6 flex-1">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>

                {/* Availability */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold ${
                      feature.available
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-200/70 text-slate-600"
                    }`}
                  >
                    {feature.available ? (
                      <CircleCheck size={13} />
                    ) : (
                      <Sparkles size={13} />
                    )}

                    {feature.status}
                  </span>

                  {feature.available && (
                    <Check
                      size={17}
                      className="shrink-0 text-emerald-600"
                      aria-label="Fitur tersedia"
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-800 via-violet-700 to-indigo-700 p-6 sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-12 size-40 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
                <Sparkles size={14} />
                Mulai dari yang kamu butuhkan
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                CV-mu bisa jadi langkah awal yang berarti.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-violet-100 sm:text-base">
                Nggak perlu menunggu semua fitur tersedia. Mulai susun CV
                sekarang, rapikan pengalamanmu, dan persiapkan langkah
                berikutnya bersama Foliora.
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

        {/* Small note */}
        <p className="mt-5 text-center text-xs leading-6 text-slate-400">
          Fitur yang berstatus “Segera hadir” masih dalam rencana
          pengembangan dan belum tersedia untuk digunakan.
        </p>
      </div>
    </section>
  );
};

export default Features;
