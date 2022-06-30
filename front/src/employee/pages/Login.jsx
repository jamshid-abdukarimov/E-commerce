import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";

const Login = () => {
  const [fullName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isFull, setIsFull] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!password || !fullName) {
      setIsFull(true);
      setTimeout(() => {
        setIsFull(false);
      }, 4000);
      return;
    }

    await axios
      .post("https://coursesnodejs.herokuapp.com/employee/sign-in", {
        fullName,
        password,
      })
      .then((data) => {
        if (!(data.data.data.employee.fullName.trim() === fullName.trim())) {
          setIsTrue(true);
          setTimeout(() => {
            setIsTrue(false);
          }, 4000);
          return;
        }
        if (localStorage.getItem("loginToken")) {
          localStorage.removeItem("loginToken");
          localStorage.removeItem("userInfo");
        }
        localStorage.setItem("employeeToken", data.data.data.token);
        localStorage.setItem(
          "employeeInfo",
          JSON.stringify(data.data.data.employee)
        );
        setNavigate(true);
      })
      .catch((err) => {
        if (err) setIsTrue(true);
        setTimeout(() => setIsTrue(false), 4000);
      })
      .finally(() => console.clear());
  };

  const setError = (message) => (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );

  if (navigate) {
    return <Redirect to="/admin" />;
  }

  return (
    <div>
      <Header />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3>Employee Log In</h3>
            {isFull && setError("Please fill in all fields!")}
            {isTrue && setError("Name or Password is not correct.")}
            <form onSubmit={submitHandler}>
              <input
                value={fullName}
                onChange={(e) => setName(e.target.value)}
                className="form-control my-3"
                placeholder="Full Name"
                type="text"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control my-3"
                placeholder="Password"
                type="password"
              />
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
