import Note from "./note/Note";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="/notes" />} />
        <Route path="/notes" element={<Note />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
