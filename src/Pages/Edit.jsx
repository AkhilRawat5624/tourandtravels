import { useNavigate, useParams } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import { useState, useEffect } from "react";

export default function EditPage() {
  const [item, setItems] = useState("");
  const { id } = useParams();

  const inputHandler = (e) => {
    setItems({ ...item, [e.target.name]: e.target.value});
  };

  function getById() {
    fetch(`http://localhost:3000/Product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function Updaterecords(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/Product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
     
        qty: item.qty,
       
       
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Item Updated");
        Navigate("/product");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Navigate = useNavigate();

  useEffect(() => {
    getById();
  }, [id]);

  return (
    <>
      <HeaderPage />
      <div className="container mt-5">
        <form onSubmit={Updaterecords} autoComplete="off">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h4>Edit Records</h4>
             

            
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="qty"
                  className="form-control"
                  name="qty"
                  value={item?.selectedDates}
                  onChange={inputHandler}
                />
              </div>
             

             
              <div className="mb-3">
                <button className="btn btn-primary">Update Records</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
