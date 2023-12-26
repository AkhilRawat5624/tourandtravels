import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const [register, setRegister] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  function dataSubmit(e) {
    e.preventDefault();
    fetch("https://136f-119-42-159-196.ngrok-free.app/registerAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: register.fname,
        email: register.email,
        mobile: register.mobile,
        username: register.username,
        password: register.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Admin Registered");
        setRegister(null);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={dataSubmit} autoComplete="off">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h4>Sign Up</h4>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="FullName"
                  className="form-control"
                  name="fname"
                  value={register?.fname}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  value={register?.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Mobile"
                  className="form-control"
                  name="mobile"
                  value={register?.mobile}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="UserName"
                  className="form-control"
                  name="username"
                  value={register?.username}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  value={register?.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Register</button>
                <button
                  onClick={(e) => navigate("/Login")}
                  className="btn btn-warning mx-2"
                >
                  Already Registered?
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
