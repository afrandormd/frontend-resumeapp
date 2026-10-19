import { Plus, School2, Trash2 } from "lucide-react";

type EducationsFormProps = {
  data: any;
  onChange: any
}

const EducationsForm = ({ data, onChange }: EducationsFormProps) => {
  const addEducation = () => {
    const newEducation = {
      institueName: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      gpa: "",
    }
    onChange([...data, newEducation]);
  }

  const removeEducation = (index: number) => {
    const updated = data.filter((_: any, i: number) => i !== index);
    onChange(updated);

  }

  const updateChangeEducation = (index: number, field: string, value: any) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated);
  }

  return (
    <div className="space-y-6">
      {/* Text Info and Add Button*/}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Educations</h3>
          <p className="text-sm text-gray-500">Add your educations</p>
        </div>
        <button type="button" onClick={addEducation} className="flex items-center p-2 gap-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors duration-300 ease-in-out"><Plus className="size-4" />Add Education</button>
      </div>
      {data.length === 0 ? (
        // Empty Data
        <div className="text-center py-8 text-gray-500">
          <School2 className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No edducation added yet</p>
          <p>Click "Add Education"</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education: any, index: number) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <h3>Education #{index + 1}</h3>
                <button onClick={() => removeEducation(index)} type="button" className="text-red-500 hover:text-red-700 transition-colors"><Trash2 className="size-4" /></button>
              </div>
              {/* Input Field */}
              <div className="grid md:grid-cols-2 gap-3">
                <input type="text" placeholder="Institution Name" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={education.institueName || ""} onChange={(e) => updateChangeEducation(index, "institueName", e.target.value)} />
                <input type="text" placeholder="Field of Study" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={education.fieldOfStudy || ""} onChange={(e) => updateChangeEducation(index, "fieldOfStudy", e.target.value)} />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="flex flex-col text-sm text-gray-600">
                  <span>Degree</span>
                  <input type="text" placeholder="Enter your degree" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={education.degree || ""} onChange={(e) => updateChangeEducation(index, "degree", e.target.value)} />
                </label>
                <label className="flex flex-col text-sm text-gray-600">
                  <span>GPA</span>
                  <input type="text" placeholder="Enter your GPA" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={education.gpa || ""} onChange={(e) => updateChangeEducation(index, "gpa", e.target.value)} />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                <label className="flex flex-col text-sm text-gray-600">
                  <span>Start Date</span>
                  <input type="month" placeholder="Start Date" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={education.startDate || ""} onChange={(e) => updateChangeEducation(index, "startDate", e.target.value)} />
                </label>
                <label className="flex flex-col text-sm text-gray-600">
                  <span>End Date</span>
                  <input type="month" placeholder="End Date" disabled={education.isCurrent} className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={education.endDate || ""} onChange={(e) => updateChangeEducation(index, "endDate", e.target.value)} />
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EducationsForm
