import { BriefcaseBusiness, Plus, Trash2 } from "lucide-react"

type ProjectsFormProps = {
  data: any,
  onChange: any
}

const ProjectsForm = ({ data, onChange }: ProjectsFormProps) => {
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    }
    onChange([...data, newProject]);
  }

  const removeProject = (index: number) => {
    const updated = data.filter((_: any, i: number) => i !== index);
    onChange(updated);

  }

  const updateChangeProject = (index: number, field: string, value: any) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated);
  }

  return (
    <div className="space-y-6">
      {/* Text Info and Add Button*/}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Projects</h3>
          <p className="text-sm text-gray-500">Add your projects</p>
        </div>
        <button type="button" onClick={addProject} className="flex items-center p-2 gap-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors duration-300 ease-in-out"><Plus className="size-4" />Add Project</button>
      </div>
      {data.length === 0 ? (
        // Empty Data
        <div className="text-center py-8 text-gray-500">
          <BriefcaseBusiness className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No project added yet</p>
          <p>Click "Add Project"</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((project: any, index: number) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <h3>Project #{index + 1}</h3>
                <button onClick={() => removeProject(index)} type="button" className="text-red-500 hover:text-red-700 transition-colors"><Trash2 className="size-4" /></button>
              </div>
              {/* Input Field */}
              <div className="grid gap-3">
                <input type="text" placeholder="Project Name" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={project.name || ""} onChange={(e) => updateChangeProject(index, "name", e.target.value)} />
                <input type="text" placeholder="Project Type" className="px-3 py-2 text-sm border rounded-lg border-gray-500" value={project.type || ""} onChange={(e) => updateChangeProject(index, "type", e.target.value)} />
              </div>
              <div className="space-y-2 mt-2">
                <textarea value={project.description || ""} onChange={(e) => updateChangeProject(index, "description", e.target.value)} rows={7} className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="Enter your project description"></textarea>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectsForm
