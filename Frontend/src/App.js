import React from "react";
import "./App.css";
import MultiActionAreaCard from "./Component/Users/Card/CardView";
import NavBar from "./Component/Users/NavBar/NavBar";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import AdminLogin from "./Component/Admin/Admin_Login/AdminLogin";
import Home from "./Component/Admin/Home/Home";
import Login from "./Component/Users/Login/Login";
import Signup from "./Component/Users/Signup/Signup";
import UerEdit from "./Component/Admin/userEdit/UserEdit";

function App() {
  const userData = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const condition = userData && userData.data.isAdmin ? false : true;

  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route element={<AdminLogin />} path="/admin/login" />
        </Routes>
        <Routes>
          <Route element={<Home />} path="/admin" />
        </Routes>

        <Routes>
          <Route element={<MultiActionAreaCard />} path="/" />
        </Routes>

        <Routes>
          <Route element={<Login />} path="/login" />
        </Routes>
        <Routes>
          <Route element={<Signup />} path="/signup" />
        </Routes>

        <Routes>
          <Route element={<UerEdit />} path="/admin/editUser/:id" />
        </Routes>
        {condition && <NavBar />}
      </Routers>
    </div>
  );
}

export default App;
