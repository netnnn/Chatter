import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login/login";

function App() {
  
  const [LoggedUser, SetLoggedUser] = useState("");
  const [file, SetFile] = useState("");
  const [Mode, SetMode] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login SetLoggedUser={SetLoggedUser} />}
        ></Route>
        {/* <Route
          path="/Register"
          element={<Register SetFile={SetFile}/>}></Route>
        <Route
          path="/Main"
          element={<Main LoggedUser={LoggedUser} file={file} Mode={Mode} SetMode={SetMode}/>}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
