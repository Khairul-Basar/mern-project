import React, { useEffect } from "react";
import notesStore from "../store/notesStore";

function AllNotes() {
  const { fetchNotes, notes, handleUpdateNote } = notesStore();

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div>
      <h1>Notes:</h1>
      {notes
        ? notes.map((note) => (
            <div key={note._id}>
              <h3>
                Title: {note.title}{" "}
                <button onClick={() => handleUpdateNote(note)}>Update</button>
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
