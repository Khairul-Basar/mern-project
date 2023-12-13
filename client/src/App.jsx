import Note from "./note/Note";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./pages/Header";
import PrivateOutlet from "./privateRoute/PrivateOutlet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="/notes" />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="notes" element={<Note />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
