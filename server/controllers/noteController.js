const Note = require("../models/noteSchema");

const allNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
};

const singleNote = async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Note.findById(id);
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
};

const creatNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.create({
      title,
      description,
    });
    res.json(note);
  } catch (err) {
    console.log(err);
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    await Note.findByIdAndUpdate(id, {
      title,
      description,
    });
    const note = await Note.findById(id);
    res.json(note);
  } catch (err) {
    console.log(err);
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.deleteOne({ _id: id });
    res.json({
      success: "Note Delete Successfully...!!",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  allNotes,
  singleNote,
  creatNote,
  updateNote,
  deleteNote,
};
