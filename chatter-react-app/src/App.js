import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Register from "./Register/Register";
import Main from "./Main/Main";
import Login from "./Login/Login";

const [LoggedUser, SetLoggedUser] = useState("");
const [file, SetFile] = useState("");
const [Mode, SetMode] = useState("");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login SetLoggedUser={SetLoggedUser} />}
        ></Route>
        <Route
          path="/Register"
          element={<Register SetFile={SetFile}/>}></Route>
        <Route
          path="/Main"
          element={<Main LoggedUser={LoggedUser} file={file} Mode={Mode} SetMode={SetMode}/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
