import { create } from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,
  createInput: {
    title: "",
    description: "",
  },
  updateInput: {
    _id: null,
    title: "",
    description: "",
  },

  handleCreateInput: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        createInput: {
          ...state.createInput,
          [name]: value,
        },
      };
    });
  },

  handleUpdateNote: (note) => {
    const { _id, title, description } = note;

    set({
      updateInput: {
        _id,
        title,
        description,
      },
    });
  },

  handleUpdateInput: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateInput: {
          ...state.updateInput,
          [name]: value,
        },
      };
    });
  },

  fetchNotes: async () => {
    const res = await axios.get("/notes");
    set({ notes: res.data });
  },

  createNote: async (e) => {
    e.preventDefault();
    const { notes, createInput } = notesStore.getState();
    const res = await axios.post("/notes", createInput);
    // console.log(res);
    set({
      notes: [...notes, res.data],
      createInput: {
        title: "",
        description: "",
      },
    });
  },
  updateNote: async (e) => {
    e.preventDefault();
    const { updateInput, notes } = notesStore.getState();
    const { _id } = updateInput;

    const res = await axios.put(`/notes/${_id}`, updateInput);

    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => note._id === _id);
    newNotes[noteIndex] = res.data;
    set({
      notes: newNotes,
      updateInput: {
        _id: null,
        title: "",
        description: "",
      },
    });
  },
  deleteNote: async (_id) => {
    const { notes } = notesStore.getState();
    const res = await axios.delete(`/notes/${_id}`);
    // console.log(res.data.success);
    const filterNotes = notes.filter((note) => note._id !== _id);
    set({
      notes: filterNotes,
    });
  },
  clearNote: () => {
    set({
      notes: null,
    });
  },
}));

export default notesStore;
