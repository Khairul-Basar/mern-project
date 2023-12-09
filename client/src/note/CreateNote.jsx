import React from "react";
import notesStore from "../store/notesStore";

function CreateNote() {
  const { createNote, handleCreateInput, createInput } = notesStore();

  return (
    <div>
      <h1>Create Note: </h1>
      <form onSubmit={createNote}>
        <p>
          <input
            type="text"
            name="title"
            onChange={handleCreateInput}
            placeholder="Title"
            value={createInput.title}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="description"
            onChange={handleCreateInput}
            placeholder="Description"
            value={createInput.description}
          />
        </p>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateNote;
