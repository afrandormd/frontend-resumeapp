import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import api from "../configs/axios";
import ResumePreview from "../components/ResumePreview";

type ResumeData = {
  template: string;
  accentColor: string;
};


const Preview = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const [loading, setLoading] = useState(true);

  const { resumeId } = useParams();

  const getResumeById = async () => {
    setLoading(true)
    try {
      const response = await api.get(`/resume/public/${resumeId}`);
      setResumeData(response.data.resume);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getResumeById();
  }, [])

  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto p-5">
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accentColor} />
      </div>
    </div>
  ) : (
    <>{loading ? (
      <div className="min-h-screen bg-slate-300 flex justify-center items-center w-full"><p className="font-bold text-3xl text-indigo-300 text-center">Loading....</p></div>
    ) : (
      <div className="flex flex-col items-center justify-center text-sm h-screen max-md:px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-indigo-500">404</h1>
        <div className="h-1 w-16 rounded bg-indigo-500 my-5 md:my-7"></div>
        <p className="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</p>
        <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="flex items-center gap-4 mt-6">
          <Link to="/" className="bg-gray-800 hover:bg-black px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
            Return Home
          </Link>
        </div>
      </div>
    )}</>
  )
}

export default Preview
