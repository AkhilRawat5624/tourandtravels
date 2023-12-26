// Import the necessary libraries
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';

export default function ProductPage() {
  const [Product, setProduct] = useState([]);
  const Navigate = useNavigate();

  const getData = () => {
    fetch('https://136f-119-42-159-196.ngrok-free.app/Product')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const totalPrice = () => {
    let full = 0;
    Product.forEach((items) => {
      full = full + items.totalPrice;
    });
    return full;
  };

  const deleteRecords = (id) => {
    if (window.confirm('Are You sure?')) {
      fetch('https://136f-119-42-159-196.ngrok-free.app/Product/' + id, {
        method: 'DELETE',
      })
        .then(() => {
          alert('Data Deleted');
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
    totalPrice();
  }, []);

  return (
    <>
      <HeaderPage />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Trip Name</th>
                  <th>Rate</th>
                  <th>Date</th>
                  <th>Days</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Product.map((item, index) => (
                  
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.tripName}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                    {`${new Date(item.selectedDates.dateFrom).toLocaleDateString()} - ${new Date(item.selectedDates.dateTo).toLocaleDateString()}`}
                  </td>
                  <td>{item.days}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => Navigate('/edit/' + item.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteRecords(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Grand Total {totalPrice()}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
