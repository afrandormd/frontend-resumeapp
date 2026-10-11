import api from "../configs/axios";
import { useAuthStore } from "../stores/authStore";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { FileText, LogOut } from "lucide-react";
import { useNavigate } from "react-router"

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
      alert("Logout Berhasil")
      navigate("/")

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500 text-primary-foreground">
            <FileText className="size-5" />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Resuvo
          </span>
        </a>

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
