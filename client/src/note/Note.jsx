import React from "react";
import AllNotes from "./AllNotes";
import CreateNote from "./CreateNote";
import UpdateNote from "./UpdateNote";
import notesStore from "../store/notesStore";

function Note() {
  const { updateInput } = notesStore();
  return (
    <div>
      <AllNotes />
      {!updateInput._id && <CreateNote />}
      {updateInput._id && <UpdateNote />}
    </div>
  );
}

export default Note;
