import { BriefcaseBusiness, Plus, Trash2 } from "lucide-react";

type ExperiencesFormProps = {
  data: any;
  onChange: any
}

const ExperiencesForm = ({ data, onChange }: ExperiencesFormProps) => {
  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: "",
    }
    onChange([...data, newExperience]);
  }

  const removeExperience = (index: number) => {
    const updated = data.filter((_: any, i: number) => i !== index);
    onChange(updated);

  }

  const updateChangeExperience = (index: number, field: string, value: any) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated);
  }

  return (
    <div className="space-y-6">
      {/* Text Info and Add Button*/}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Experiences</h3>
          <p className="text-sm text-gray-500">Add your work experiences</p>
        </div>
        <button type="button" onClick={addExperience} className="flex items-center p-2 gap-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors duration-300 ease-in-out"><Plus className="size-4" />Add Experience</button>
      </div>
      {data.length === 0 ? (
        // Empty Data
        <div className="text-center py-8 text-gray-500">
          <BriefcaseBusiness className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No work experiences added yet</p>
          <p>Click "Add Experience"</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((experience: any, index: number) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <h3>Experience #{index + 1}</h3>
                <button onClick={() => removeExperience(index)} type="button" className="text-red-500 hover:text-red-700 transition-colors"><Trash2 className="size-4" /></button>
              </div>
              {/* Input Field */}
              <div className="grid md:grid-cols-2 gap-3">
                <input type="text" placeholder="Company Name" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={experience.company || ""} onChange={(e) => updateChangeExperience(index, "company", e.target.value)} />
                <input type="text" placeholder="Position Name" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={experience.position || ""} onChange={(e) => updateChangeExperience(index, "position", e.target.value)} />
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                <label className="flex flex-col text-sm text-gray-600">
                  <span>Start Date</span>
                  <input type="month" placeholder="Start Date" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={experience.startDate || ""} onChange={(e) => updateChangeExperience(index, "startDate", e.target.value)} />
                </label>
                <label className="flex flex-col text-sm text-gray-600">
                  <span>End Date</span>
                  <input type="month" placeholder="End Date" disabled={experience.isCurrent} className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={experience.endDate || ""} onChange={(e) => updateChangeExperience(index, "endDate", e.target.value)} />
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={experience.isCurrent || false} onChange={(e) => updateChangeExperience(index, "isCurrent", e.target.checked ? true : false)} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 " />
                  <span className="text-sm text-gray-700">Currently Working</span>
                </label>
              </div>
              <div className="space-y-2 mt-2">
                <textarea value={experience.description || ""} onChange={(e) => updateChangeExperience(index, "description", e.target.value)} rows={7} className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="Enter your work description"></textarea>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperiencesForm
