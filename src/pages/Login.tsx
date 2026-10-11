import { useState } from "react"
import { User2Icon, Mail, Lock } from "lucide-react"
import { Navigate, useNavigate } from "react-router"
import { useAuthStore } from "../stores/authStore"
import api from "../configs/axios"

const Login = () => {
  const [state, setState] = useState("login")
  const [disable, setDisable] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate()
  const { setUserData, isAuthenticated } = useAuthStore()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setDisable(true)
    try {
      if (state === "login") {
        const { data } = await api.post('/auth/login', formData)
        alert("Login Berhasil")
        setUserData(data.user)
        navigate("/app")
      } else {
        const { data } = await api.post('/auth/register', formData)
        alert("Register Berhasil")
        setUserData(data.user)
        navigate("/app")
      }
    } catch (error: any) {
      setErrorMsg(error.response.data.message)
    } finally {
      setDisable(false)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return !isAuthenticated ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
        <p className="text-gray-500 text-sm mt-2">Please {state === "login" ? "Login" : "Sign up"} to continue</p>
        {errorMsg && <p className="text-center text-red-500 text-sm mt-2">{errorMsg}</p>}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon size={16} color="gray" />
            <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0" value={formData.name} onChange={handleChange} />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={16} color="gray" />
          <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={16} color="gray" />
          <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" disabled={disable} className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
          {state === "login" ? "Login" : "Sign up"}
        </button>
        <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-500 text-sm mt-3 mb-11">{state === "login" ? "Don't have an account?" : "Already have an account?"} <a href="#" className="text-indigo-500 hover:underline">click here</a></p>
      </form>
    </div>
  ) : (
    <Navigate to={"/app"} replace />
  )
}

export default Login
