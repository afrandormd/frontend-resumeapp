import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import api from "../configs/axios";
import { ArrowLeftIcon, ChevronLeft, ChevronRight, DownloadIcon, SaveIcon, ShareIcon } from "lucide-react";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import SummaryForm from "../components/forms/SummaryForm";
import ResumePreview from "../components/ResumePreview";
import ExperiencesForm from "../components/forms/ExperiencesForm";
import EducationsForm from "../components/forms/EducationsForm";
import ProjectsForm from "../components/forms/ProjectsForm";
import SkillsForm from "../components/forms/SkillsForm";
import SettingsForm from "../components/forms/SettingsForm";
import { toast } from "sonner";

type PersonalInfo = {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  profession?: string;
  image?: string | File;
};

type ResumeData = {
  _id: string;
  title: string;
  summary: string;
  template: string;
  accentColor: string;
  educations: any[];
  experiences: any[];
  personalInfo: PersonalInfo;
  projects: any[];
  public: boolean;
  skills: string[];
};

const ResumeBuilder = () => {
  const { resumeId } = useParams()
  const [resumeData, setResumeData] = useState<ResumeData>({
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
    { id: 'settings', name: 'Settings' },
  ]

  const handleSubmitForm = async (e: any) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append("resumeData", JSON.stringify(resumeData));
      removeBackground && formData.append("removeBackground", "yes");
      typeof resumeData.personalInfo.image === "object" &&
        formData.append("image", resumeData.personalInfo.image)

      const response = await api.put(`/resume/${resumeId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      setResumeData(response.data.resume);

      toast.success("Resume updated successfully");

    } catch (error) {
      console.log(error)
    }
  }

  const handleShare = () => {
    const frontendUrl = window.location.href.split("/app")[0];
    const resumeUrl = frontendUrl + "/view/" + resumeId;

    if (navigator.share) {
      navigator.share({
        url: resumeUrl,
        text: 'My Resume'
      })
    } else {
      toast.error("Your browser does not support sharing");
    }
  }

  const handleDownloadOrPrint = () => {
    window.print();
  }

  const activeSection = sections[activeSectionIndex];

  // Get Data Resume By Id
  const getResumeById = async () => {
    const response = await api.get(`/resume/${resumeId}`);
    setResumeData(response.data.resume);
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
                {/* Percentage*/}
                {/*
                <span className={`absolute text-sm z-10 flex items-center justify-start px-2 font-semibold text-gray-500 ${activeSectionIndex > 0 ? "text-white" : "text-gray-500"}`}>
                  {(activeSectionIndex * 100) / (sections.length - 1)}%
                </span>
                */}
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
                  {activeSection.id === 'settings' && (
                    <SettingsForm data={resumeData} onChange={(data: any) => setResumeData((prev) => ({
                      ...prev,
                      title: data.title,
                      template: data.template,
                      public: data.public,
                      accentColor: data.accentColor
                    }))} />
                  )}

                  <button type="submit" className="bg-green-400 text-white hover:bg-green-600 transition-all rounded-lg px-6 py-3 mt-6 text-sm">
                    <span className="flex items-center justify-center gap-2">
                      <SaveIcon className="size-4" />
                      Save
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 max-lg:mt-6">
            {/* Preview */}
            <div className="lg:col-span-7 max-lg:mt-6">
              <div className="relative w-full">
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
                  {resumeData.public && (
                    <button className="flex items-center justify-center py-2 px-4 gap-2 bg-blue-200 text-sm text-blue-600 rounded-lg hover:bg-blue-300 transition-all" onClick={handleShare} type="button">
                      <ShareIcon className="size-4" /> Share
                    </button>
                  )}
                  <button className="flex items-center justify-center py-2 px-4 gap-2 bg-purple-200 text-sm text-purple-600 rounded-lg hover:bg-purple-300 transition-all" onClick={handleDownloadOrPrint} type="button">
                    <DownloadIcon className="size-4" /> Download / Print
                  </button>
                </div>
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
