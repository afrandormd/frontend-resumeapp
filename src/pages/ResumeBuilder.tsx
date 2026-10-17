import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import api from "../configs/axios";
import { ArrowLeftIcon, ChevronLeft, ChevronRight } from "lucide-react";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import SummaryForm from "../components/forms/SummaryForm";
import ResumePreview from "../components/ResumePreview";
import ExperiencesForm from "../components/forms/ExperiencesForm";
import EducationsForm from "../components/forms/EducationsForm";
import ProjectsForm from "../components/forms/ProjectsForm";
import SkillsForm from "../components/forms/SkillsForm";

const ResumeBuilder = () => {
  const { resumeId } = useParams()
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    summary: "",
    template: "classic",
    accentColor: "darkblue",
    educations: [],
    experiences: [],
    personalInfo: {},
    projects: [],
    public: false,
    skills: [],
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    { id: 'personal', name: 'Personal Info' },
    { id: 'summary', name: 'Summary' },
    { id: 'experiences', name: 'Experiences' },
    { id: 'educations', name: 'Educations' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
  ]

  const handleSubmitForm = (e: any) => {
    e.preventDefault()
    console.log(resumeData)
  }

  const activeSection = sections[activeSectionIndex];

  // Get Data Resume By Id
  const getResumeById = async () => {
    const response = await api.get(`/resume/${resumeId}`);
    console.log(response.data)
  }

  useEffect(() => {
    getResumeById()
  }, [])

  return (
    <>
      {/* Button Back*/}
      <div className="container max-w-7xl mx-auto px-4 py-7">
        <Link to="/app" className="inline-flex gap-2 items-center text-sm font-semibold leading-6 text-gray-900 hover:text-gray-800 transition-all">
          <ArrowLeftIcon className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      {/* 1st column is form, 2nd column is preview */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Input Form Sections */}
          <div className="relative lg:col-span-5 rounded-lg shadow-sm border-gray-200 overflow-hidden">
            <div className="bg-white rounded-lg border-gray-200 p-6 pt-4">
              <div className="bg-green-500 h-4 transition-all rounded-full duration-2000" style={{ width: `${(activeSectionIndex * 100) / (sections.length - 1)}%` }}>
                <span className={`absolute text-sm z-10 flex items-center justify-start px-2 font-semibold text-gray-500 ${activeSectionIndex > 0 ? "text-white" : "text-gray-500"}`}>
                  {(activeSectionIndex * 100) / (sections.length - 1)}%
                </span>
              </div>
              {/* Section Navigation / Pagination */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                <div>{/* Later */}</div>
                <div className="flex items-center">
                  {activeSectionIndex !== 0 && (
                    <button onClick={() => setActiveSectionIndex((prev) => Math.max(prev - 1, 0))}
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 transition-all"
                      disabled={activeSectionIndex === 0}
                    >
                      <ChevronLeft className="size-4" />Previous
                    </button>
                  )}
                  <button onClick={() => setActiveSectionIndex((prev) => Math.min(prev + 1, sections.length - 1))}
                    className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 transition-all"
                    disabled={activeSectionIndex === sections.length - 1}
                  >
                    Next<ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
              {/* Form Input */}
              <div className="space-y-6">
                <form onSubmit={handleSubmitForm}>
                  {activeSection.id === 'personal' && (
                    <PersonalInfoForm data={resumeData.personalInfo} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev,
                      personalInfo: data,
                    }))
                    } removeBackground={removeBackground} setRemoveBackground={setRemoveBackground} />
                  )}
                  {activeSection.id === 'summary' && (
                    <SummaryForm data={resumeData.summary} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev,
                      summary: data,
                    }))
                    }
                      setResumeData={setResumeData} />
                  )}
                  {activeSection.id === 'experiences' && (
                    <ExperiencesForm data={resumeData.experiences} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev, experiences: data
                    }))}
                    />
                  )}
                  {activeSection.id === 'educations' && (
                    <EducationsForm data={resumeData.educations} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev, educations: data
                    }))}
                    />
                  )}
                  {activeSection.id === 'projects' && (
                    <ProjectsForm data={resumeData.projects} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev, projects: data
                    }))}
                    />
                  )}
                  {activeSection.id === 'skills' && (
                    <SkillsForm data={resumeData.skills} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev, skills: data
                    }))}
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 max-lg:mt-6">
            {/* Preview */}
            <div className="lg:col-span-7 max-lg:mt-6">
              <div>
                {/* Action print share */}
              </div>
              <div>
                <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accentColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeBuilder
