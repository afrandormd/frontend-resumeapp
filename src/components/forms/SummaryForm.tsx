
type SummaryFormProps = {
  data: any,
  onChange: any,
  setResumeData: any
}

const SummaryForm = ({ data, onChange }: SummaryFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">Summary</h3>
        <p className="text-sm text-gray-500">Add your professional summary</p>
      </div>
      {/* Form */}
      <div>
        <textarea value={data || ""} onChange={(e: any) => onChange(e.target.value)} rows={7} className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="Enter your professional summary"></textarea>
      </div>
    </div>
  )
}

export default SummaryForm
