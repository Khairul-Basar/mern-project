if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { PORT } = process.env;

// import dependencies
const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const Note = require("./models/noteSchema");

const {
  allNotes,
  singleNote,
  creatNote,
  updateNote,
  deleteNote,
} = require("./controllers/noteController");

// create express app
const app = express();

// midddleware config with express app
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Database Connect
db();

// Get All Notes
app.get("/notes", allNotes);

// Get Single Note
app.get("/notes/:id", singleNote);

// Create Note
app.post("/notes", creatNote);

// Update Note
app.put("/notes/:id", updateNote);

// Delete Note
app.delete("/notes/:id", deleteNote);

app.listen(PORT, () => {
  console.log(`Server running  on port: ${PORT}`);
});
