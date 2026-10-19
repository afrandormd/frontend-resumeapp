import { BlocksIcon, EyeIcon, EyeOffIcon, FileIcon, PaletteIcon } from "lucide-react"

type SettingsFormProps = {
  data: any,
  onChange: any
}

const SettingsForm = ({ data, onChange }: SettingsFormProps) => {

  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value })
  }

  const handleVisibility = () => {
    onChange({ ...data, public: !data.public })
  }

  return (
    <>
      <h3 className="text-lg font-bold text-gray-900">Settings</h3>
      <p className="text-sm text-gray-500">Configure your resume settings</p>
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <FileIcon className="size-4" />
          File Name <span className="text-red-500">*</span>
        </label>
        <input type="text" placeholder="Enter your filename" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data.title || ""} onChange={(e: any) => handleChange("title", e.target.value)} required />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <PaletteIcon className="size-4" />
          Accent Color <span className="text-red-500">*</span>
        </label>
        <input type="color" className="mt-1 w-full px-2 py-1 border border-gray-300 h-10 text-sm rounded-lg" value={data.accentColor || ""} onChange={(e: any) => handleChange("accentColor", e.target.value)} required />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <BlocksIcon className="size-4" />
          Template
        </label>
        <select className="mt-1 w-full px-3 py-2 border border-gray-300 transition-colors text-sm rounded-lg" value={data.template || ""} onChange={(e: any) => handleChange("template", e.target.value)}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <EyeIcon className="size-4" />
          Visibility
        </label>
        <button type="button" onClick={handleVisibility} className="bg-purple-400 text-white hover:bg-purple-600 transition-all rounded-lg px-6 py-3 mt-1 text-sm">{data.public ? (
          <div className="flex items-center gap-2">
            <EyeIcon className="size-4" />
            <span>Public</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <EyeOffIcon className="size-4" />
            <span>Private</span>
          </div>
        )}</button>
      </div >
    </>
  )
}

export default SettingsForm
