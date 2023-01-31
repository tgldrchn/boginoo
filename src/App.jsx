import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./component/Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import HomeLogged from "./component/HomeLogged";
import ShortLink from "./component/shortLink/shortLink";
import Forget from "./component/Forget";
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home/:userid" element={<HomeLogged />} />
      <Route path="/:id" element={<ShortLink />} />
      <Route path="/forget" element={<Forget />} />
    </Routes>
  );
}

export default App;
