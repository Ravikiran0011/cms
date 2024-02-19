import { create } from "zustand";
const store = (set) => ({
  user: null,
  RegisterUser: (data) => {
    set((store) => ({ user: data }));
    localStorage.setItem("user", "data");
  },
  EditUser: (data) => {
    // set((store) => ({ tasks: [...store.tasks, { title, state }] }));
  },
});

export const useStore = create(store);
