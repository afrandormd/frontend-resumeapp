import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";

import { useAuthStore } from "../stores/authStore";

const Footer = () => {
  const { isAuthenticated } = useAuthStore();

  const dashboardHref = isAuthenticated ? "/app" : "/register";
  const dashboardLabel = isAuthenticated
    ? "Buka Dashboard"
    : "Buat akun";

  const navigation = [
    {
      title: "Jelajahi",
      links: [
        { label: "Home", href: "#home" },
        { label: "Fitur", href: "#fitur" },
        { label: "Cara Kerja", href: "#cara-kerja" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ];

  const features = [
    {
      icon: FileText,
      label: "Resume Builder",
      available: true,
    },
    {
      icon: PanelsTopLeft,
      label: "Portfolio Builder",
      available: false,
    },
    {
      icon: ArrowUpRight,
      label: "Cover Letter Builder",
      available: false,
    },
    {
      icon: Sparkles,
      label: "Job Application Tracker",
      available: false,
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-gray-50">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Foliora Home"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-violet-700 text-white shadow-lg shadow-violet-200">
                <PanelsTopLeft size={23} strokeWidth={2.3} />
              </div>

              <div>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                  foli<span className="text-violet-700">ora</span>
                </span>

                <p className="-mt-1 text-[10px] font-medium tracking-wide text-slate-500">
                  YOUR CAREER TOOLKIT
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Persiapkan dokumen kariermu dengan lebih terarah. Mulai dari
              CV, tunjukkan potensimu, dan ambil langkah berikutnya bersama
              Foliora.
            </p>

            <Link
              to={dashboardHref}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
            >
              {dashboardLabel}

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-3 text-xs text-slate-400">
              Satu langkah kecil menuju persiapan karier yang lebih baik.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">
              Navigasi
            </h3>

            <ul className="mt-5 space-y-4">
              {navigation[0].links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 transition hover:text-violet-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <h3 className="text-sm font-extrabold text-slate-900">
                Akun
              </h3>

              <ul className="mt-4 space-y-4">
                {!isAuthenticated && (
                  <li>
                    <Link
                      to="/login"
                      className="text-sm text-slate-600 transition hover:text-violet-700"
                    >
                      Masuk
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to={dashboardHref}
                    className="text-sm text-slate-600 transition hover:text-violet-700"
                  >
                    {isAuthenticated ? "Dashboard" : "Daftar akun"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">
              Fitur Foliora
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Alat untuk membantu kamu mempersiapkan dokumen pekerjaan.
            </p>

            <ul className="mt-5 space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li
                    key={feature.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${
                          feature.available
                            ? "bg-violet-100 text-violet-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon size={17} />
                      </div>

                      <span className="text-sm font-medium text-slate-700">
                        {feature.label}
                      </span>
                    </div>

                    {!feature.available && (
                      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
                        Segera hadir
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-slate-200 bg-slate-50/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Foliora. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-slate-500">
            Dibuat untuk perjalanan kariermu, satu langkah setiap kali.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 transition hover:text-violet-700"
          >
            Kembali ke atas
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
