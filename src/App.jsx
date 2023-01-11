import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./component/Home";
import Delete from "./component/delete/Delete";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
export const instance = axios.create({
  baseURL: "http://localhost:7000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ustaga" element={<Delete />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/:id" element={<Home />} />
    </Routes>
  );
}

export default App;
