import axios from "axios";
import { create } from "zustand";

const authStore = create((set) => ({
  signupInputField: {
    email: "",
    password: "",
  },
  loginInputField: {
    email: "",
    password: "",
  },
  loggedIn: null,

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

  handleLoginInput: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginInputField: {
          ...state.loginInputField,
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
  handleLogin: async () => {
    try {
      const { loginInputField } = authStore.getState();
      const res = await axios.post("/login", loginInputField, {
        withCredentials: true,
      });

      set({
        loggedIn: true,
        loginInputField: {
          email: "",
          password: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
  logout: async () => {
    try {
      await axios.get("/logout");
      set({
        loggedIn: false,
      });
    } catch (err) {
      console.log(err);
    }
  },
  checkAuth: async () => {
    try {
      const res = await axios.get("/check-auth");
      set({
        loggedIn: true,
      });
      // console.log(res.data);
    } catch (err) {
      alert(`You are ${err.response.data}. Please Login.`);
    }
  },
}));

export default authStore;
