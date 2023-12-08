if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { PORT } = process.env;

// import dependencies
const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const Note = require("./models/noteSchema");

// create express app
const app = express();

// midddleware config with express app
app.use(express.json());
app.use(cors());

// Database Connect
db();

// Get All Notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
});

// Get Single Note
app.get("/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Note.findById(id);
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
});

// Create Note
app.post("/notes", async (req, res) => {
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
});

// Update Note
app.put("/notes/:id", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server running  on port: ${PORT}`);
});
