import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Register from "./Register/register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login/>}
        ></Route>
        <Route
          path="/Register"
          element={<Register/>}
        ></Route>
        {/*<Route
          path="/Main"
          element={<Main LoggedUser={LoggedUser} file={file} Mode={Mode} SetMode={SetMode}/>}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
