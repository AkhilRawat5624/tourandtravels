import { Link, useNavigate } from "react-router-dom";

export default function HeaderPage() {
    let data = JSON.parse(localStorage.getItem("uname"));
    const Navigate = useNavigate();
    function logout() {
        localStorage.clear();
        Navigate("/login");
    }

    return (<>
        <div className="container p-3 ">
            <div className="row">
                <div className="col-md-12 text-end">Logged in : {data.username}</div>
            </div>
            <div className="row">
                <div className="col-md-3"><h4>Hello {data.fname}</h4></div>
                <div className="col-md-9 ">
                    <ul className="nav ">
                        <li><Link to="/welcome" className="nav-link ">Home</Link></li>
                        <li><Link to="/add" className="nav-link">Packages</Link></li>
                        <li className=" dropdown">
                            <Link to="#" className="nav-link dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbarDropdown">
                                Admin
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/profile" className="dropdown-item">
                                    Profile
                                </Link>
                                <a href="#" className="dropdown-item" onClick={logout}>
                                    Logout
                                </a>
                            </div>
                        </li>
                        <li><Link to="/product" className="nav-link"><i class="fa-solid fa-cart-shopping"></i></Link></li>
                     

                    </ul>
                </div>

            </div>
        </div>

    </>)
}