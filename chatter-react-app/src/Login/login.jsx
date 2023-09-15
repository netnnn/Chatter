import "./login.css"
import { Link } from "react-router-dom";

function Login(props) {
    return (
      <>
        <div id="container">
          <div className="mb-4 row">
            <label htmlFor="inputName" className="col-sm-3 col-form-label">
              Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="inputName"
              ></input>
            </div>
          </div>
          <div className="mb-4 row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              ></input>
              <div id="incorrect"></div>
            </div>
          </div>
          <div className="mb-4 row center">
            <button
              id="loginbutton"
              className="btn btn-success col-sm-4">
              Login
            </button>
            <div id="register">
              Not registered? <Link to="/Register">click here</Link> to register
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;
