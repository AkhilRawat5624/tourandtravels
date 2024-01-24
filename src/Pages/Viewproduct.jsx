import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';

const ProductPage = () => {
  const [Product, setProduct] = useState(() => {
    const storedProduct = localStorage.getItem('product');
    return storedProduct ? JSON.parse(storedProduct) : [];
  });
  const Navigate = useNavigate();

  const getData = () => {
    fetch('http://localhost:3000/product')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        localStorage.setItem('product', JSON.stringify(data));
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
      fetch(`http://localhost:3000/product/${id}`, {
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

  const checkout = () => {
    if (window.confirm('Proceed to checkout?')) {
      fetch('http://localhost:3000/booked', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Product),
      })
        .then(() => {
          alert('Order successful');
          // Remove the product data from local storage
          localStorage.removeItem('product');
          
          // Clear the product data after successful checkout
          setProduct([]);

          // Remove the product data from http://localhost:3000/product
          fetch('http://localhost:3000/product', {
            method: 'DELETE',
          })
            .then(() => console.log('Product data removed'))
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
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
                      {`${new Date(item.selectedDates.dateFrom).toLocaleDateString()} - ${new Date(
                        item.selectedDates.dateTo
                      ).toLocaleDateString()}`}
                    </td>
                    <td>{item.days}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => Navigate(`/edit/${item.id}`)}
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
                <tr>
                  <div className="d-grid p-0">
                    <button
                      className="btn btn-secondary login-btn mt-4 btn-lg"
                      onClick={checkout}
                    >
                      Checkout
                    </button>
                  </div>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
