const Note = require("../models/noteSchema");

const allNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json({ notes });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const singleNote = async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Note.findOne({ _id: id, user: req.user._id });
    res.json(notes);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const creatNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.create({
      title,
      description,
      user: req.user._id,
    });
    res.json(note);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    await Note.findOneAndUpdate(
      {
        _id: id,
        user: req.user._id,
      },
      {
        title,
        description,
      }
    );
    const note = await Note.findById(id);
    res.json(note);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.deleteOne({ _id: id, user: req.user._id });
    res.json({
      success: "Note Delete Successfully...!!",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  allNotes,
  singleNote,
  creatNote,
  updateNote,
  deleteNote,
};
