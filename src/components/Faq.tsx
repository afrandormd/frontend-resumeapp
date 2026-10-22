import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  HelpCircle,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import Title from "./Title";
import { useAuthStore } from "../stores/authStore";

const faqs = [
  {
    question: "Foliora itu apa, sih?",
    answer:
      "Foliora adalah career toolkit yang membantu kamu mempersiapkan dokumen pekerjaan. Saat ini, kamu bisa membuat CV, mengatur visibilitasnya, membagikan link CV publik, dan mengunduhnya sebagai PDF.",
  },
  {
    question: "Apakah Foliora cocok untuk fresh graduate?",
    answer:
      "Tentu! Kamu bisa mulai menyusun CV dari pendidikan, proyek kuliah, pengalaman magang, organisasi, dan skill yang relevan. Kamu nggak harus punya pengalaman kerja bertahun-tahun untuk mulai mempersiapkan CV.",
  },
  {
    question: "Apa bedanya CV Public dan Private?",
    answer:
      "CV Public dapat diakses orang lain melalui link yang kamu bagikan. Sementara itu, CV Private tidak ditampilkan sebagai CV publik. Periksa pengaturan visibilitas sebelum membagikan link dan hindari memasukkan informasi pribadi yang sensitif.",
  },
  {
    question: "Apakah CV bisa diunduh sebagai PDF?",
    answer:
      "Bisa. Setelah mengisi dan memeriksa CV, gunakan tombol Download / Print, kemudian pilih Save as PDF pada dialog print browser untuk menyimpan dokumenmu.",
  },
  {
    question: "Apakah template Foliora pasti lolos ATS?",
    answer:
      "Nggak ada template yang bisa menjamin CV lolos semua sistem ATS. Foliora membantu menyusun informasi secara terstruktur, tetapi hasil seleksi tetap bergantung pada banyak faktor, termasuk relevansi pengalaman, keterampilan, dan persyaratan lowongan.",
  },
  {
    question: "Apakah semua fitur Foliora sudah tersedia?",
    answer:
      "Saat ini, Resume Builder merupakan fitur utama yang tersedia. Portfolio Builder, Cover Letter Builder, dan Job Application Tracker masih direncanakan untuk pengembangan berikutnya.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isAuthenticated } = useAuthStore();

  const ctaHref = isAuthenticated ? "/app" : "/register";
  const ctaLabel = isAuthenticated
    ? "Buka Dashboard"
    : "Mulai bikin CV";

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 size-72 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 size-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <Title
            section="FAQ"
            title="Masih ada yang bikin kamu ragu?"
            description="Tenang, cari tahu dulu hal-hal yang perlu kamu ketahui sebelum mulai menyiapkan dokumen karier bersama Foliora."
          />
        </div>

        {/* FAQ Layout */}
        <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          {/* Left Information Card */}
          <aside className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6 sm:p-8">
            <div className="absolute -right-10 -top-10 size-36 rounded-full border border-violet-200/60" />

            <div className="absolute -right-5 -top-5 size-24 rounded-full border border-violet-200/60" />

            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-700 text-white shadow-lg shadow-violet-200">
                <HelpCircle size={24} />
              </div>

              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900">
                Persiapan karier nggak harus bikin pusing.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Mulai dari dokumen yang paling kamu butuhkan sekarang.
                Nggak perlu menunggu semuanya sempurna untuk mengambil
                langkah pertama.
              </p>

              <div className="mt-6 space-y-3 border-t border-violet-100 pt-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm">
                    <FileText size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Susun CV profesional
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Lengkapi informasi dan pengalamanmu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm">
                    <LockKeyhole size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Atur visibilitas CV
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Pilih Public atau Private sesuai kebutuhanmu.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to={ctaHref}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                {ctaLabel}
                <ArrowRight size={17} />
              </Link>
            </div>
          </aside>

          {/* Right Accordion */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`border-b border-slate-100 last:border-b-0 ${
                    isOpen ? "bg-violet-50/40" : "bg-white"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-violet-50/70 sm:px-7 sm:py-6"
                    >
                      <span
                        className={`text-sm font-bold leading-6 sm:text-base ${
                          isOpen
                            ? "text-violet-800"
                            : "text-slate-800"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-violet-700 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={answerId}
                      className="px-5 pb-5 sm:px-7 sm:pb-6"
                    >
                      <p className="max-w-2xl text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:items-center">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
            <Sparkles size={18} />
          </div>

          <p className="text-sm leading-6 text-slate-600">
            <span className="font-bold text-slate-800">
              Mulai dari langkah kecil.
            </span>{" "}
            Rapikan CV-mu, periksa kembali isinya, lalu siapkan dokumen
            yang relevan dengan pekerjaan yang kamu incar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
