import axios from "axios";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(null);
  async function getAllNote() {
    const res = await axios.get("/notes");
    console.log(res.data.note);
  }

  getAllNote();
  return (
    <>
      <h1>Notes</h1>
    </>
  );
}

export default App;
