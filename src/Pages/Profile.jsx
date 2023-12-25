import HeaderPage from "./HeaderPage";
export default function ProfilePage()
{
    let data = JSON.parse(localStorage.getItem("uname"));

    return(<>
    <HeaderPage/>
    <div className="container mt-5">
        <div className="row justify-content-center">
      
            <div className="col-md-5">
               
                <table className="table border table-striped">
                <tr>
                <th>Id</th>
                <td>{data.id}</td>
            </tr>
                <tr>
                <th>Name</th>
                <td>{data.fname}</td>
            </tr>

            <tr>
                <th>Email</th>
                <td>{data.email}</td>
            </tr>

            <tr>
                <th>Mobile</th>
                <td>{data.mobile}</td>
            </tr>
                </table>
            </div>
        </div>
    </div>
    
    </>)
}