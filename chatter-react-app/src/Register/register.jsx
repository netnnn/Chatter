import "./register.css";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <>
      <div id="container">
        <div className="row">
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

        <div className=" row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            ></input>
          </div>
        </div>

        <div className="row">
          <label
            htmlFor="inputVerifyPassword"
            className="col-sm-3 col-form-label verify">
            Verify Password
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="inputVerifyPassword"
            ></input>
          </div>
        </div>

        <div className="row">
          <label htmlFor="inputDisplayName" className="col-sm-3 col-form-label">
            Nickname
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="inputDisplayName"
            ></input>
          </div>
        </div>

        <div className="row">
          <label htmlFor="inputPicture" className="col-sm-3 col-form-label">
            Picture
          </label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              id="inputPicture"
              accept="image/*"
            ></input>
          </div>
        </div>

        <div id="loginBlock" className="mb-4 row">
          <button
            id="login"
            className="btn btn-success col-sm-4">
            Sign up
          </button>
          <div id="login">
            Already registered? <Link to="/">click here</Link> to login
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;