import { useEffect, useState, type FormEvent } from "react";
import { FilePenLine, PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import api from "../configs/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [title, setTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  // Create Resume
  const handleCreateResume = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post("/resume", { title });

      toast.success("Resume created successfully");

      setTitle("");
      setShowCreateResume(false);
      getAllResumes();

    } catch (error: any) {
      setErrMsg(error.response.data.message);
    }
  };

  // Delete Resume
  const handleDeleteResume = async (resumeId: string) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this resume?");
      if (confirm) {
        await api.delete(`/resume/${resumeId}`);
        getAllResumes();
      }
      toast.success("Resume deleted successfully");
    } catch (error: any) {
      setErrMsg(error.response.data.message);
    }
  };

  // Get All Resumes
  const getAllResumes = async () => {
    const response = await api.get("/resume");
    setResumes(response.data.resumes);
  }

  useEffect(() => {
    getAllResumes();
  }, [])


  // Open dialog
  const openCreateResume = () => {
    setShowCreateResume(true);
  };

  // Handle dialog close
  const handleDialogChange = (open: boolean) => {
    setShowCreateResume(open);

    if (!open) {
      setTitle("");
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Dashboard Header */}
      <div className="mb-8 space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          My Resumes
        </h1>

        <p className="text-sm text-muted-foreground">
          Create and manage your professional resumes.
        </p>
      </div>

      {/* Create Resume */}
      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          onClick={openCreateResume}
          className="group h-48 w-full flex-col gap-3 rounded-xl border-2 border-dashed border-muted-foreground/25 bg-background shadow-none transition-all hover:border-primary hover:bg-accent/50 sm:max-w-44"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary/10">
            <PlusIcon className="size-6 transition-transform group-hover:rotate-90" />
          </span>

          <span className="text-sm font-medium">
            Create Resume
          </span>
        </Button>
      </div>

      <hr className="border-slate-300 my-6 sm-w-[350px]" />

      {/* List of Resumes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {!resumes.length ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <FilePenLine className="size-10 text-zinc-300 mb-3" />
            <h1 className="text-xl font-semibold tracking-tight text-zinc-800">
              No Resumes Found
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              Create your first resume to get started.
            </p>
          </div>
        ) : (
          resumes.map((resume: any) => (
            <div
              key={resume._id}
              className="group shadow-md relative flex flex-col justify-between h-48 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center size-10 rounded-xl text-zinc-600">
                  <FilePenLine className="size-12 text-zinc-200" />
                </div>

                {/* Actions: always show on mobile, hover on desktop  */}
                <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-1 opacity-100 translate-y-0">
                  <button
                    type="button"
                    onClick={() => navigate(`/app/resume-builder/${resume._id}`)}
                    aria-label="Edit resume"
                    className="p-2 cursor-pointer rounded-lg text-blue-600 bg-blue-50 transition-colors"
                  >
                    <PencilIcon className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteResume(resume._id)}
                    aria-label="Delete resume"
                    className="p-2 rounded-lg cursor-pointer text-red-600 bg-red-50 transition-colors"
                  >
                    <TrashIcon className="size-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h2 className="text-base font-semibold text-zinc-900 line-clamp-2 leading-snug">
                  {resume.title}
                </h2>
                <p className="text-xs text-zinc-500">
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create Resume Dialog */}
      <Dialog
        open={showCreateResume}
        onOpenChange={handleDialogChange}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">
              Create a Resume
            </DialogTitle>

            <DialogDescription>
              Give your resume a title to get started.
            </DialogDescription>
          </DialogHeader>
          {errMsg && <p className="text-red-500 text-sm text-center">{errMsg}</p>}
          <form onSubmit={handleCreateResume} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter resume title"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              required
            />

            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              Create Resume
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Dashboard;
