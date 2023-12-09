import React from "react";
import notesStore from "../store/notesStore";

function UpdateNote() {
  const { updateInput, handleUpdateInput, updateNote } = notesStore();
  return (
    <div>
      <h1>Update Note: </h1>
      <form onSubmit={updateNote}>
        <p>
          <input
            type="text"
            name="title"
            onChange={handleUpdateInput}
            placeholder="Title"
            value={updateInput.title}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="description"
            onChange={handleUpdateInput}
            placeholder="Description"
            value={updateInput.description}
          />
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateNote;
