import api from "../configs/axios";
import { useAuthStore } from "../stores/authStore";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { FileText, LogOut, PanelsTopLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const getInitials = (name?: string) => {
  if (!name?.trim()) return "U";

  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const Header = () => {
  const { user, removeUserData } = useAuthStore()

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout', {})
      removeUserData()
      toast.success("You have been logged out")
      navigate("/")

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Foliora Home"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-700 text-white shadow-lg shadow-violet-200">
            <PanelsTopLeft size={22} strokeWidth={2.3} />
          </div>

          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              foli<span className="text-violet-700">ora</span>
            </span>

            <p className="-mt-1 text-[10px] font-medium tracking-wide text-slate-500">
              YOUR CAREER TOOLKIT
            </p>
          </div>
        </Link>

        {/* User & Logout */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarFallback>
                {getInitials(user?.name)}
              </AvatarFallback>
            </Avatar>

            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-medium">
                {user.name}
              </span>
              <span className="max-w-40 truncate text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2 bg-red-500 hover:bg-red-600 text-white hover:text-white rounded-full"
          >
            <LogOut className="size-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
