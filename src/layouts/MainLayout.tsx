import { Outlet } from "react-router"
import Header from "../components/Header"

const MainLayout = () => {
  const user = {
    name: "Rando",
    email: "rando@example.com",
  };

  const handleLogout = () => {
    // Hubungkan dengan fungsi logout autentikasi lu.
    console.log("Logout clicked");
  };

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <Outlet />
      <h1>Footer</h1>
    </>
  )
}

export default MainLayout
