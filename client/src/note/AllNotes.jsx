import React, { useEffect } from "react";
import notesStore from "../store/notesStore";
import authStore from "../store/authStore";

function AllNotes() {
  const { fetchNotes, notes, handleUpdateNote, deleteNote, clearNote } =
    notesStore();

  const { logout } = authStore();
  const handleLogout = async () => {
    await logout();
    clearNote();
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div>
      <h1>Notes:</h1>
      <button onClick={handleLogout}>logout</button>
      {notes
        ? notes.map((note) => (
            <div key={note._id}>
              <h3>
                Title: {note.title}{" "}
                <button onClick={() => handleUpdateNote(note)}>Update</button>
                <button onClick={() => deleteNote(note._id)}>Delete</button>
              </h3>
              <p>
                <strong>Description:</strong> {note.description}
              </p>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}

export default AllNotes;
