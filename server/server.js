if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { PORT } = process.env;

// import dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./database/db");
const requireAuth = require("./middleware/requireAuth");

const {
  allNotes,
  singleNote,
  creatNote,
  updateNote,
  deleteNote,
} = require("./controllers/noteController");

const {
  signUp,
  login,
  logout,
  checkAuth,
} = require("./controllers/userController");

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
app.use(cookieParser());

// Database Connect
db();

// Signup
app.post("/signup", signUp);

// Login
app.post("/login", login);

// Logout
app.get("/logout", logout);

// Auth
app.get("/check-auth", requireAuth, checkAuth);

// Get All Notes
app.get("/notes", requireAuth, allNotes);

// Get Single Note
app.get("/notes/:id", requireAuth, singleNote);

// Create Note
app.post("/notes", requireAuth, creatNote);

// Update Note
app.put("/notes/:id", requireAuth, updateNote);

// Delete Note
app.delete("/notes/:id", requireAuth, deleteNote);

app.listen(PORT, () => {
  console.log(`Server running  on port: ${PORT}`);
});
