import ModernTemplate from "./resume-templates/ModernTemplate"
import ClassicTemplate from "./resume-templates/ClassicTemplate"

type ResumePreviewProps = {
  data: any,
  template: string,
  accentColor: string
}

const ResumePreview = ({ data, template, accentColor }: ResumePreviewProps) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />
        break;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />
        break;
    }
  }

  return (
    <div className="w-full bg-gray-100">
      <div className="border border-gray-200 print:shadow-none print:border-none">
        {renderTemplate()}
      </div>
    </div>
  )
}

export default ResumePreview
