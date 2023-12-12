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
    try {
      const { signupInputField } = authStore.getState();
      const res = await axios.post("/signup", signupInputField);
      set({
        signupInputField: {
          email: "",
          password: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default authStore;
