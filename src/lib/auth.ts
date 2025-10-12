"use client";

// Mock authentication logic
export const mockAuth = {
  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (email && password) {
      const user = {
        id: "1",
        name: "Admin User",
        email: email,
        avatar: "",
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");
      return { success: true, user };
    }

    return { success: false, error: "Invalid credentials" };
  },

  register: async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (name && email && password) {
      const user = {
        id: "1",
        name: name,
        email: email,
        avatar: "",
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");
      return { success: true, user };
    }

    return { success: false, error: "Registration failed" };
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  },

  getUser: () => {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("isAuthenticated") === "true";
  },
};
