import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthState = {
  user: any | null;
  isAuthenticated: boolean;
  setUserData: (user: any) => void;
  removeUserData: () => void;
}

export const useAuthStore = create<AuthState>()(devtools((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isAuthenticated: localStorage.getItem("auth") === "true",

  setUserData: (user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("auth", "true");
    set({ user: user, isAuthenticated: true });
  },

  removeUserData: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    set({ user: null, isAuthenticated: false });
  }
}))
);
