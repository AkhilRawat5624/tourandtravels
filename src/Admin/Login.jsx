import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../css/login.css';
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const url = "http://localhost:3000/registerAdmin";

  const inputHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  function LoginAdmin(e) {
    e.preventDefault();

    fetch(`${url}?username=${login.username}&password=${login.passwords}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        let result = data;
        let status = false;

        result.map((user) => {
          if (login.username === user["username"] && login.passwords === user["password"]) {
            status = true;
            localStorage.setItem("uname", JSON.stringify(user));
          }
        });

        if (status) {
          Navigate("/welcome");
        } else {
          alert("Wrong User");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Navigate = useNavigate();
  return (
    <>

      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ">
              <div className="mt-5  ">
                <form onSubmit={LoginAdmin}>
                  <div className="row justify-content-center px-4">
                    
                    <div className="col-md-9 border my-5 box ">
                      <h4 className="my-4 text-center text-white"> Login To Your Account</h4>
                      <div className="mb-4">
                        <label htmlFor="" className="text-white mb-1">Username</label>
                        <input
                          type="text"
                         
                          className="form-control input-box"
                          name="username"
                          value={login?.username}
                          onChange={inputHandler}
                        />
                      </div>

                      <div className="mb-4">
                      <label htmlFor="" className="text-white mb-1">Password</label>
                        <input
                          type="password"
                        
                          className="form-control input-box"
                          name="passwords"
                          value={login?.passwords}
                          onChange={inputHandler}
                        />
                      </div>
                      <div className=" d-grid mb-1">
                        <button className="btn btn-light login-btn">Login</button>
                      </div>
                      <div className="text-end mb-5">
                        <Link  to={'/Register'} style={{textDecoration:'none'}}>
                      <span className="text-white ">  Not registered?</span>
                      </Link>
                    </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 py-5 px-4">
            <div className="container-fluid mt-5 py-5 px-5">
              <div className="container mt-5 text-center px-5 jusit">
                <h1 >THE GOAL OF LIFE IS LIVING IN AGREEMENT WITH NATURE</h1>
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
