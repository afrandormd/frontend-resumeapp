import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import Dashboard from "./pages/Dashboard"
import ResumeBuilder from "./pages/ResumeBuilder"
import Login from "./pages/Login"
import Preview from "./pages/Preview"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="app" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="resume-builder/:resumeId" element={<ResumeBuilder />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/view/:resumeId" element={<Preview />} />
    </Routes>
  )
}

export default App
