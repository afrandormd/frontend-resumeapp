import { Sparkles } from "lucide-react";

type TitleProps = {
  section: string;
  title: string;
  description: string;
};

const Title = ({ section, title, description }: TitleProps) => {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      {/* Section Label */}
      <div className="mb-5 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-700 sm:text-sm">
          <Sparkles size={15} strokeWidth={2.2} />
          {section}
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {/* Accent */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
        <span className="h-1 w-8 rounded-full bg-violet-700" />
        <span className="h-1 w-2 rounded-full bg-violet-300" />
      </div>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
};

export default Title;
