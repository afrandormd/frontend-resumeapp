import { Plus, X } from "lucide-react";
import { useState } from "react";

type SkillsFormProps = {
  data: any,
  onChange: any
}

const SkillsForm = ({ data, onChange }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  }

  const removeSkill = (index: number) => {
    onChange(data.filter((_: any, i: number) => i !== index))
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">
          Skills
        </h3>
        <p className="text-sm text-gray-500">
          Add your skills
        </p>
      </div>

      {/* Input dan tombol Add */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your skill, e.g. JavaScript, Public Speaking"
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg"
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onKeyDown={handleKeyPress}
        />

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:cursor-not-allowed"
          onClick={addSkill}
          disabled={!newSkill.trim()}
        >
          <Plus className="size-4" />
          Add
        </button>
      </div>

      {/* Daftar skills */}
      <div className="flex flex-wrap gap-2">
        {data.length > 0 ? (
          data.map((skill: string, index: number) => (
            <span
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {skill}
              <button
                type="button"
                className="ml-1 hover:bg-green-200 rounded-full p-0.5 transition-colors"
                onClick={() => removeSkill(index)}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            No skills added yet
          </p>
        )}
      </div>
    </div>
  )
}

export default SkillsForm
