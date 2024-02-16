import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../css/register.css';

export default function RegisterPage() {
  const [register, setRegister] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  async function dataSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/registerAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname: register.fname,
          email: register.email,
          mobile: register.mobile,
          username: register.username,
          password: register.password,
        }),
      });

      const data = await response.json();
      alert("Registration Successful");
      setRegister({});
      e.target.reset();
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  }

  return (
    <>
      <div className="container-fluid box2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 py-5">
              <div className=" py-5 text-center ">
                <div className="content mt-5 register-box border border-2  border-secondary px-3">
                  <h1 className="mt-4" >WELCOME BACK!</h1>
                  <h3 className=" my-5">If you already have an account please log in here</h3>
                  <div className="d-grid">
                    <button className="btn btn-light btn-lg login-btn mb-5"  onClick={(e) => navigate("/Login")}>
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 box-right p-2 mt-5">
              <div className="container text-center border  border-1 register-box px-4 mt-5">
                <h1 className="my-4">CREATE ACCOUNT</h1>
                <form onSubmit={dataSubmit} autoComplete="off">
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="FullName"
                      className="form-control input-box"
                      name="fname"
                      value={register?.fname}
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control input-box"
                      name="email"
                      value={register?.email}
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Mobile"
                      className="form-control input-box"
                      name="mobile"
                      value={register?.mobile}
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="UserName"
                      className="form-control input-box"
                      name="username"
                      value={register?.username}
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control input-box"
                      name="password"
                      value={register?.password}
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <button className="btn btn-light login-btn">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}