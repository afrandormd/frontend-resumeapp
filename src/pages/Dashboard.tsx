import { useState, type FormEvent } from "react";
import { PlusIcon } from "lucide-react";

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

const Dashboard = () => {
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [title, setTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleCreateResume = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post("/resume", { title });

      alert("Resume created successfully");

      setTitle("");
      setShowCreateResume(false);

    } catch (error: any) {
      setErrMsg(error.response.data.message);
    }
  };

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
