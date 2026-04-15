import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: {
    username: "Jane Doe",
    email: "janedoe@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=jane",
  },
  isLoading: false,
  error: null,

  login: (username, password) => {
    set({ isLoading: true });
    // Simulate a brief delay if needed, but the user asked to remove async logic
    set({
      user: {
        username: username || "Jane Doe",
        email: "janedoe@gmail.com",
        avatar: "https://i.pravatar.cc/150?u=jane",
      },
      isLoading: false,
      error: null,
    });
    return { success: true, message: "Logged in successfully (Mock)" };
  },

  signup: (username, email, password) => {
    set({ isLoading: true });
    set({
      user: {
        username: username,
        email: email,
        avatar: "https://i.pravatar.cc/150?u=jane",
      },
      isLoading: false,
      error: null,
    });
    return { success: true, message: "Signed up successfully (Mock)" };
  },

  logout: () => {
    set({ user: null });
    return { success: true, message: "Logged out successfully (Mock)" };
  },
}));
