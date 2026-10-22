import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  PanelsTopLeft,
  LoaderCircle,
  CheckCircle2,
  Circle,
} from "lucide-react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router";
import { useAuthStore } from "../stores/authStore";
import api from "../configs/axios";
import { toast } from "sonner";

const Login = () => {
  const [disable, setDisable] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Mode form berdasarkan URL
  const isRegister = location.pathname === "/register";

  const { setUserData, isAuthenticated } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const passwordLength = formData.password.length;
  const isPasswordValid = passwordLength >= 8;

  // Reset state saat berpindah mode login/register
  useEffect(() => {
    setErrorMsg("");
    setShowPassword(false);

    setFormData((prev) => ({
      ...prev,
      name: "",
      password: "",
    }));
  }, [isRegister]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errorMsg) {
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    // Validasi password khusus saat register
    if (isRegister && !isPasswordValid) {
      setErrorMsg("Password harus terdiri dari minimal 8 karakter.");
      return;
    }

    setDisable(true);

    try {
      const endpoint = isRegister
        ? "/auth/register"
        : "/auth/login";

      const payload = isRegister
        ? formData
        : {
            email: formData.email,
            password: formData.password,
          };

      const { data } = await api.post(endpoint, payload);

      setUserData(data.user);

      toast.success(
        isRegister
          ? "Registrasi berhasil!"
          : "Login berhasil!"
      );

      navigate("/app", { replace: true });
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Terjadi kesalahan. Silakan coba lagi.";

      setErrorMsg(message);
      toast.error(message);
    } finally {
      setDisable(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/app" replace />;
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-5 py-10">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-indigo-200/40 blur-3xl" />

      {/* Auth Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-violet-100/50 sm:p-9">
        {/* Logo */}
        <Link
          to="/"
          className="mx-auto flex w-fit items-center gap-2.5"
          aria-label="Foliora Home"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-violet-700 text-white shadow-lg shadow-violet-200">
            <PanelsTopLeft size={23} />
          </div>

          <div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              foli<span className="text-violet-700">ora</span>
            </span>

            <p className="-mt-1 text-[10px] font-medium tracking-wide text-slate-500">
              YOUR CAREER TOOLKIT
            </p>
          </div>
        </Link>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
            {isRegister
              ? "Mulai perjalananmu"
              : "Selamat datang kembali!"}
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {isRegister
              ? "Buat akun dan mulai siapkan CV profesionalmu bersama Foliora."
              : "Masuk untuk melanjutkan persiapan dokumen kariermu."}
          </p>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div
            role="alert"
            className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          >
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          {/* Name - Register Only */}
          {isRegister && (
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nama lengkap
              </label>

              <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <UserRound
                  size={18}
                  className="shrink-0 text-slate-400"
                />

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Masukkan nama lengkap"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={isRegister}
                  disabled={disable}
                  className="h-full w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0 disabled:opacity-60"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
              <Mail
                size={18}
                className="shrink-0 text-slate-400"
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="nama@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={disable}
                className="h-full w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0 disabled:opacity-60"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
              <LockKeyhole
                size={18}
                className="shrink-0 text-slate-400"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={
                  isRegister
                    ? "Buat password minimal 8 karakter"
                    : "Masukkan password"
                }
                autoComplete={
                  isRegister ? "new-password" : "current-password"
                }
                value={formData.password}
                onChange={handleChange}
                minLength={isRegister ? 8 : undefined}
                required
                disabled={disable}
                aria-describedby={
                  isRegister ? "password-requirement" : undefined
                }
                className="h-full min-w-0 flex-1 border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0 disabled:opacity-60"
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={disable}
                aria-label={
                  showPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
                aria-pressed={showPassword}
                className="flex shrink-0 items-center justify-center rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* Password Requirement - Register Only */}
            {isRegister && (
              <div
                id="password-requirement"
                className="mt-2.5 flex items-start justify-between gap-3"
              >
                <div
                  className={`flex items-start gap-2 text-xs leading-5 transition-colors ${
                    isPasswordValid
                      ? "text-emerald-600"
                      : "text-slate-500"
                  }`}
                >
                  {isPasswordValid ? (
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <Circle
                      size={15}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <span>
                    {isPasswordValid
                      ? "Password memenuhi syarat minimum."
                      : "Gunakan minimal 8 karakter untuk password."}
                  </span>
                </div>

                <span
                  className={`shrink-0 text-xs font-semibold tabular-nums ${
                    isPasswordValid
                      ? "text-emerald-600"
                      : "text-slate-400"
                  }`}
                >
                  {passwordLength}/8
                </span>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={disable}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {disable ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Memproses...
              </>
            ) : (
              <>
                {isRegister ? "Buat akun" : "Masuk"}
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </form>

        {/* Switch Login / Register */}
        <div className="mt-6 text-center text-sm text-slate-500">
          {isRegister
            ? "Sudah punya akun?"
            : "Belum punya akun?"}{" "}

          <Link
            to={isRegister ? "/login" : "/register"}
            className="font-bold text-violet-700 transition hover:text-violet-900 hover:underline"
          >
            {isRegister ? "Masuk sekarang" : "Daftar sekarang"}
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-6 border-t border-slate-100 pt-5 text-center">
          <Link
            to="/"
            className="text-xs font-medium text-slate-400 transition hover:text-violet-700"
          >
            ← Kembali ke halaman utama
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
