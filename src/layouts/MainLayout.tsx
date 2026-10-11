import { Navigate, Outlet } from "react-router"
import Header from "../components/Header"
import { useAuthStore } from "../stores/authStore"

const MainLayout = () => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/login"} replace />
  )
}

export default MainLayout
