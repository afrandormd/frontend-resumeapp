import { Globe, Link2, Mail, MapPin, Phone } from "lucide-react"

type ResumePreviewProps = {
  data: any,
  template: string,
  accentColor: string
}

const ResumePreview = ({ data, template, accentColor }: ResumePreviewProps) => {
  return (
    <div className="w-full bg-gray-100">
      <div className="border border-gray-200 print:shadow-none print:border-none">
        {/* Render Template*/}
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
          <header className="text-center mb-8  pb-6 border-b-2">
            <h1 className="text-3xl font-bold" style={{ color: accentColor }}>{data.personalInfo?.fullname || "Enter Your Fullname"}</h1>
            <h2 className="text-lg my-2 text-gray-600">{data.personalInfo?.jobTitle || "Enter Your Job Title"}</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              {data.personalInfo?.email && (
                <div className="flex items-center gap-1">
                  <Mail className="size-4" />
                  <span>{data.personalInfo?.email}</span>
                </div>
              )}
              {data.personalInfo?.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="size-4" />
                  <span>{data.personalInfo?.phone}</span>
                </div>
              )}
              {data.personalInfo?.address && (
                <div className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  <span>{data.personalInfo?.address}</span>
                </div>
              )}
              {data.personalInfo?.linkedinUrl && (
                <div className="flex items-center gap-1">
                  <Link2 className="size-4" />
                  <span>{data.personalInfo?.linkedinUrl}</span>
                </div>
              )}
              {data.personalInfo?.portfolioUrl && (
                <div className="flex items-center gap-1">
                  <Globe className="size-4" />
                  <span>{data.personalInfo?.portfolioUrl}</span>
                </div>
              )}
            </div>
          </header>
          {data.summary && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </section>
          )}
        </div>
      </div>

    </div>
  )
}

export default ResumePreview
