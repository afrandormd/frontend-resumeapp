import { Mail, Phone, MapPin, Globe } from "lucide-react";

type ClassicTemplateProps = {
  data: any;
  accentColor: string;
};

const ClassicTemplate = ({ data, accentColor }: ClassicTemplateProps) => {
  const formatDate = (dateStr: any) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="text-center mb-8 pb-6 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold " style={{ color: accentColor }}>
          {data.personalInfo?.fullname || "Your Name"}
        </h1>

        <h2 className="text-md text-gray-600 font-bold my-2">
          {data.personalInfo?.jobTitle}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {data.personalInfo?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4" />
              <a href={`mailto:${data.personalInfo.email}`}>{data.personalInfo.email}</a>
            </div>
          )}
          {data.personalInfo?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo?.address && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>{data.personalInfo.address}</span>
            </div>
          )}
          {data.personalInfo?.linkedinUrl && (
            <div className="flex items-center gap-1">
              <svg className="size-4" style={{ color: accentColor }} xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <a href={`https://linkedin.com/in/${data.personalInfo.linkedinUrl}`}>{data.personalInfo.linkedinUrl}</a>
            </div>
          )}
          {data.personalInfo?.portfolioUrl && (
            <div className="flex items-center gap-1">
              <Globe className="size-4" />
              <a href={`https://${data.personalInfo.portfolioUrl}`}>{data.personalInfo.portfolioUrl}</a>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experiences && data.experiences.length > 0 && (
        <section className="mb-6">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: accentColor }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-4">
            {data.experiences.map((exp: any, index: number) => (
              <div
                key={index}
                className="border-l-3 pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>
                      {formatDate(exp.startDate)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.endDate)}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: accentColor }}
          >
            PROJECTS
          </h2>

          <ul className="space-y-3 ">
            {data.projects.map((proj: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-start border-l-3 border-gray-300 pl-6"
              >
                <div>
                  <li className="font-semibold text-gray-800 ">{proj.name}</li>
                  <p className="text-gray-600">{proj.description}</p>
                </div>
              </div>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      {data.educations && data.educations.length > 0 && (
        <section className="mb-6">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: accentColor }}
          >
            EDUCATION
          </h2>

          <div className="space-y-3">
            {data.educations.map((edu: any, index: number) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                  </h3>
                  <p className="text-gray-700">{edu.intitutionName}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: accentColor }}
          >
            CORE SKILLS
          </h2>

          <div className="flex gap-4 flex-wrap">
            {data.skills.map((skill: any, index: number) => (
              <div key={index} className="text-gray-700">
                • {skill}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
