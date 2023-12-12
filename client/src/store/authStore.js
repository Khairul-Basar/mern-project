import axios from "axios";
import { create } from "zustand";

const authStore = create((set) => ({
  signupInputField: {
    email: "",
    password: "",
  },

  handleSignupInput: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupInputField: {
          ...state.signupInputField,
          [name]: value,
        },
      };
    });
  },
  handleSignup: async () => {
    const { signupInputField } = authStore.getState();
    const res = await axios.post("/signup", signupInputField);
  },
}));

export default authStore;
