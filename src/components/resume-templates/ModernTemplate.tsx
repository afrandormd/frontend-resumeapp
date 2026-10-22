import { Mail, Phone, MapPin, Globe } from "lucide-react";

type ModernTemplateProps = {
  data: any;
  accentColor: string;
};

const ModernTemplate = ({ data, accentColor }: ModernTemplateProps) => {
  const formatDate = (dateStr: any) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        <div className="col-span-1  py-10">
          {/* Image */}
          {data.personalInfo?.image &&
            typeof data.personalInfo.image === "string" ? (
            <div className="mb-6">
              <img
                src={data.personalInfo.image}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
                style={{ background: accentColor + "70" }}
              />
            </div>
          ) : data.personalInfo?.image &&
            typeof data.personalInfo.image === "object" ? (
            <div className="mb-6">
              <img
                src={URL.createObjectURL(data.personalInfo.image)}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
            </div>
          ) : null}
        </div>

        {/* Name + Title */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1 className="text-4xl font-bold text-zinc-700 tracking-widest" style={{ color: accentColor }}>
            {data.personalInfo?.fullname || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
            {data?.personalInfo?.jobTitle || "Profession"}
          </p>
        </div>

        {/* Left Sidebar */}
        <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0">
          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm">
              {data.personalInfo?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  <a href={`mailto:${data.personalInfo.email}`}>{data.personalInfo.email}</a>
                </div>
              )}
              {data.personalInfo?.address && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span>{data.personalInfo.address}</span>
                </div>
              )}
              {data.personalInfo?.linkedinUrl && (
                <div className="flex items-center gap-2">
                  <svg className="size-4" style={{ color: accentColor }} xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <a href={`https://linkedin.com/in/${data.personalInfo.linkedinUrl}`}>{data.personalInfo.linkedinUrl}</a>
                </div>
              )}
              {data.personalInfo?.portfolioUrl && (
                <div className="flex items-center gap-2">
                  <Globe size={14} style={{ color: accentColor }} />
                  <a href={`https://${data.personalInfo.portfolioUrl}`}>{data.personalInfo.portfolioUrl}</a>
                </div>
              )}
            </div>
          </section>

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                SKILLS
              </h2>
              <ul className="space-y-1 text-sm">
                {data.skills.map((skill: string, index: number) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Right Content */}
        <main className="col-span-2 p-8 pt-0">
          {/* Summary */}
          {data.summary && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experiences && data.experiences.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-6 mb-8">
                {data.experiences.map((experience: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900">
                        {experience.position}
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(experience.startDate)} -{" "}
                        {experience.isCurrent ? "Present" : formatDate(experience.endDate)}
                      </span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: accentColor }}>
                      {experience.company}
                    </p>
                    {experience.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                        {experience.description.split("\n").map((line: string, i: number) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.educations && data.educations.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EDUCATION
              </h2>
              <div className="space-y-6 mb-8">
                {data.educations.map((edu: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900">
                        {edu.degree} ({edu.fieldOfStudy})
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: accentColor }}>
                      {edu.intitutionName}
                    </p>
                    {edu.gpa && (
                      <span className="text-sm text-gray-500">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section>
              <h2
                className="text-sm uppercase tracking-widest font-semibold"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-4">
                {data.projects.map((project: any, index: number) => (
                  <div key={index}>
                    <h3 className="text-md font-medium text-zinc-800 mt-3">
                      {project.name}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: accentColor }}>
                      {project.type}
                    </p>
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700  space-y-1">
                        {project.description.split("\n").map((line: string, i: number) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default ModernTemplate;
