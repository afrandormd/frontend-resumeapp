import { BriefcaseBusiness, Globe, Link, Mail, MapPin, Phone, User } from "lucide-react"

type PersonalInfoFormProps = {
  data: any,
  onChange: any,
  removeBackground: any,
  setRemoveBackground: any
}

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }: PersonalInfoFormProps) => {
  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <>
      <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
      <p className="text-sm text-gray-500">Get started by filling in the information below.</p>
      <div className="flex items-center gap-2">
        <label>{data.image ? (
          <img src={typeof data.image === "string" ? data.image : URL.createObjectURL(data.image)} className="w-16 h-16 rounded-full object-cover mt-5 ring-slate-300 hover:opacity-80 cursor-pointer" alt="user-image" />
        ) : (
          <div className="inline-flex items-center gap-2 mt-5 text-slate-500 hover:text-slate-700 cursor-pointer">
            <User className="size-10 p-2.5 border rounded-full" />
            Upload user image
          </div>
        )}
          <input type="file" accept="image/jpeg, image/png, image/jpg" className="hidden" onChange={(e: any) => handleChange("image", e.target.files[0])} />
        </label>
        {typeof data.image === 'object' && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>Remove Background</p>
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
              <input type="checkbox" className="peer sr-only" onChange={() => setRemoveBackground((prev: any) => !prev)} checked={removeBackground} />
              <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer peer-checked:bg-indigo-600 peer-focus:ring-2 peer-focus:ring-indigo-500"></div>
              <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
          </div>
        )}
      </div>
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <User className="size-4" />
          Fullname <span className="text-red-500">*</span>
        </label>
        <input type="text" placeholder="Enter your fullname" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['fullname'] || ""} onChange={(e: any) => handleChange("fullname", e.target.value)} />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <BriefcaseBusiness className="size-4" />
          Job Title <span className="text-red-500">*</span>
        </label>
        <input type="text" placeholder="Enter your job title" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['jobTitle'] || ""} onChange={(e: any) => handleChange("jobTitle", e.target.value)} />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Mail className="size-4" />
          Email <span className="text-red-500">*</span>
        </label>
        <input type="email" placeholder="Enter your email address" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['email'] || ""} onChange={(e: any) => handleChange("email", e.target.value)} />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Phone className="size-4" />
          Phone <span className="text-red-500">*</span>
        </label>
        <input type="tel" placeholder="Enter your phone number" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['phone'] || ""} onChange={(e: any) => handleChange("phone", e.target.value)} />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <MapPin className="size-4" />
          Address <span className="text-red-500">*</span>
        </label>
        <input type="text" placeholder="Enter your address" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['address'] || ""} onChange={(e: any) => handleChange("address", e.target.value)} />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <svg className="size-4" xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          LinkedIn
        </label>
        <input type="text" placeholder="Enter your linkedin username" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['linkedinUrl'] || ""} onChange={(e: any) => handleChange("linkedinUrl", e.target.value)} />
      </div >
      <div className="space-y-1 mt-5">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Globe className="size-4" />
          Portfolio
        </label>
        <input type="text" placeholder="Enter your portfolio url" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 transition-colors text-sm" value={data['portfolioUrl'] || ""} onChange={(e: any) => handleChange("portfolioUrl", e.target.value)} />
      </div >
    </>
  )
}

export default PersonalInfoForm
