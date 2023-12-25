import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const url = "http://localhost:3000/registerAdmin";

  const inputHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  function LoginAdmin(e) {
    e.preventDefault();

    fetch(`${url}?username=${login.username}&password=${login.passwords}`)
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
      <div className="container mt-5">
        <form onSubmit={LoginAdmin}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h4> Login</h4>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="UserName"
                  className="form-control"
                  name="username"
                  value={login?.username}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="passwords"
                  value={login?.passwords}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
