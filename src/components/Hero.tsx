import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Menu,
  PanelsTopLeft,
  Sparkles,
  X,
} from "lucide-react";
import { useAuthStore } from "../stores/authStore";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Fitur", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const primaryHref = isAuthenticated ? "/app" : "/register";
  const primaryLabel = isAuthenticated ? "Dashboard" : "Mulai bikin CV";

  const sections = [
    {
      title: "PROFESSIONAL SUMMARY",
      lines: ["Ceritakan profil profesionalmu...", "Tunjukkan kelebihan yang relevan..."],
    },
    {
      title: "EXPERIENCE",
      lines: ["Posisi atau pengalamanmu", "Kontribusi dan pencapaianmu..."],
    },
    {
      title: "PROJECTS",
      lines: ["Proyek yang pernah kamu kerjakan", "Teknologi dan hasil pengerjaan..."],
    },
    {
      title: "EDUCATION",
      lines: ["Gelar · Nama institusi", "Tahun kelulusan"],
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        id="home"
        className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Foliora Home"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-700 text-white shadow-lg shadow-violet-200">
              <PanelsTopLeft size={22} strokeWidth={2.3} />
            </div>

            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                foli<span className="text-violet-700">ora</span>
              </span>

              <p className="-mt-1 text-[10px] font-medium tracking-wide text-slate-500">
                YOUR CAREER TOOLKIT
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth Actions */}
          <div className="hidden items-center gap-3 sm:flex">
            {!isAuthenticated && (
              <Link
                to="/login"
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Masuk
              </Link>
            )}

            <Link
              to={primaryHref}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 sm:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950/30 transition-opacity duration-200 sm:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[min(85%,360px)] bg-white p-6 shadow-2xl transition-transform duration-200 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <span className="text-lg font-extrabold tracking-tight">
              foli<span className="text-violet-700">ora</span>
            </span>

            <button
              type="button"
              aria-label="Tutup menu"
              onClick={() => setMenuOpen(false)}
              className="flex size-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <X size={21} />
            </button>
          </div>

          <div className="mt-7 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
            {!isAuthenticated && (
              <Link
                to="/login"
                onClick={handleNavClick}
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Masuk ke akun
              </Link>
            )}

            <Link
              to={primaryHref}
              onClick={handleNavClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-4 py-3 font-semibold text-white transition hover:bg-violet-800"
            >
              {primaryLabel}
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 rounded-2xl bg-violet-50 p-4">
            <div className="flex items-center gap-2 text-violet-700">
              <Sparkles size={17} />
              <span className="text-sm font-bold">
                Satu langkah setiap kali
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Mulai siapkan dokumen kariermu bersama Foliora.
            </p>
          </div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(221,214,254,0.62),_transparent_42%),radial-gradient(ellipse_at_bottom_right,_rgba(224,231,255,0.65),_transparent_38%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-24">
          {/* Hero Copy */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-violet-800 shadow-sm sm:text-sm">
              <Sparkles size={16} />

              Buat langkah pertamamu lebih siap

              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                Let's go!
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[60px]">
              Lagi cari kerja?
              <br />

              <span className="bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                Siapkan dirimu
              </span>

              <br />

              dengan lebih percaya diri.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Baru lulus atau lagi berburu peluang baru? Yuk, siapkan CV
              profesionalmu tanpa ribet. Mulai bangun dokumen kariermu
              bersama Foliora, selangkah demi selangkah.
            </p>

            {/* Hero Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={primaryHref}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-700 px-6 py-4 text-base font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-800"
              >
                {isAuthenticated ? "Buka Dashboard" : "Mulai bikin CV"}

                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#fitur"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50"
              >
                Kenalan dengan Foliora
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-emerald-600" />
                Cocok untuk fresh graduate
              </span>

              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-emerald-600" />
                Tanpa desain dari nol
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -left-7 top-10 size-32 rounded-full bg-violet-300/30 blur-3xl" />
            <div className="absolute -right-6 bottom-4 size-40 rounded-full bg-indigo-300/30 blur-3xl" />

            <div className="relative rounded-[28px] border border-violet-100 bg-white p-3 shadow-2xl shadow-violet-200/60 sm:p-5">
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-4 pt-1 sm:px-3">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                    <FileText size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Resume Builder
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Contoh tampilan CV
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 sm:text-xs">
                  Preview
                </span>
              </div>

              <div className="grid gap-3 pt-4 sm:grid-cols-[0.85fr_1.15fr]">
                {/* Editor Mockup */}
                <div className="space-y-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
                  <p className="text-xs font-bold text-slate-800">
                    Lengkapi CV-mu
                  </p>

                  {[
                    "Informasi pribadi",
                    "Professional summary",
                    "Pengalaman",
                    "Pendidikan",
                    "Skills",
                  ].map((label, index) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2.5"
                    >
                      <div
                        className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-white ${
                          index === 0
                            ? "bg-violet-600"
                            : index === 1
                              ? "bg-violet-500"
                              : index === 2
                                ? "bg-indigo-500"
                                : index === 3
                                  ? "bg-blue-500"
                                  : "bg-emerald-500"
                        }`}
                      >
                        <Check size={15} />
                      </div>

                      <span className="text-[10px] font-medium leading-tight text-slate-600 sm:text-xs">
                        {label}
                      </span>
                    </div>
                  ))}

                  <div className="rounded-xl bg-violet-50 p-3">
                    <div className="flex items-center gap-1.5 text-violet-700">
                      <Sparkles size={13} />

                      <span className="text-[10px] font-bold">
                        Pelan-pelan aja
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] leading-4 text-violet-600">
                      Mulai dari informasi yang kamu punya.
                    </p>
                  </div>
                </div>

                {/* Resume Preview Mockup */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="border-b-2 border-violet-700 pb-3 text-center">
                    <div className="text-base font-extrabold text-slate-900 sm:text-lg">
                      Nama Kamu
                    </div>

                    <p className="mt-1 text-[10px] font-semibold text-violet-700 sm:text-xs">
                      Software Engineer
                    </p>

                    <p className="mt-2 text-[8px] text-slate-500 sm:text-[9px]">
                      email@example.com · Indonesia
                    </p>
                  </div>

                  <div className="mt-4 space-y-4">
                    {sections.map((section) => (
                      <div key={section.title}>
                        <p className="border-b border-slate-200 pb-1 text-[9px] font-extrabold tracking-wide text-slate-800 sm:text-[10px]">
                          {section.title}
                        </p>

                        <div className="mt-2 space-y-1.5">
                          {section.lines.map((line) => (
                            <div
                              key={line}
                              className="h-1.5 rounded bg-slate-100"
                              style={{
                                width:
                                  line.length > 30 ? "100%" : "78%",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}

                    <div>
                      <p className="border-b border-slate-200 pb-1 text-[9px] font-extrabold tracking-wide text-slate-800 sm:text-[10px]">
                        SKILLS
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {["React", "TypeScript", "Node.js"].map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-violet-50 px-1.5 py-1 text-[8px] font-medium text-violet-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Information Card */}
            <div className="absolute -bottom-6 left-3 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-3.5 shadow-xl shadow-slate-200/60 sm:-left-5 sm:p-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Check size={22} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800 sm:text-sm">
                  Satu langkah lebih siap
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                  CV-mu, versi yang lebih terstruktur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
