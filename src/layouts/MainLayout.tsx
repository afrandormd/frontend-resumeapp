import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  )
}

export default MainLayout
