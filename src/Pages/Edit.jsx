// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';

// Component definition
export default function EditPage() {
  const [selectedDates, setSelectedDates] = useState({ dateFrom: '', dateTo: '' });
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch the product data based on the ID
    fetch(`http://localhost:3000/Product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedDates(data.selectedDates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDateChange = (field, selectedDate) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [field]: selectedDate.toISOString(), // Save the dates in ISO string format
    }));
  };

  const calculateDays = (dateFrom, dateTo) => {
    const timeDifference = new Date(dateTo) - new Date(dateFrom);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  const calculateTotalPrice = (days, basePrice) => {
    return days * basePrice;
  };

  const handleUpdate = () => {
    // Fetch the complete Product object
    fetch(`http://localhost:3000/Product/${id}`)
      .then((res) => res.json())
      .then((productData) => {
        // Manually set the base price
        const basePrice = 500;
  
        // Update the relevant properties in the Product object
        const updatedProduct = {
          ...productData,
          selectedDates: {
            dateFrom: selectedDates.dateFrom,
            dateTo: selectedDates.dateTo,
          },
          days: calculateDays(selectedDates.dateFrom, selectedDates.dateTo),
          totalPrice: calculateTotalPrice(
            calculateDays(selectedDates.dateFrom, selectedDates.dateTo),
            basePrice  // Use the manually set base price here
          ),
        };
  
        // Send the updated Product object back to the server
        fetch(`http://localhost:3000/Product/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
        })
          .then(() => {
            alert('Product updated successfully');
            Navigate('/product'); 
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

  return (
    <>
      <HeaderPage />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Edit Product</h2>
            <div>
              <label>Date From:</label>
              <input
                type="date"
                value={selectedDates.dateFrom ? new Date(selectedDates.dateFrom).toISOString().split('T')[0] : ''}
                onChange={(e) => handleDateChange('dateFrom', new Date(e.target.value))}
              />
            </div>
            <div>
              <label>Date To:</label>
              <input
                type="date"
                value={selectedDates.dateTo ? new Date(selectedDates.dateTo).toISOString().split('T')[0] : ''}
                onChange={(e) => handleDateChange('dateTo', new Date(e.target.value))}
              />
            </div>
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
