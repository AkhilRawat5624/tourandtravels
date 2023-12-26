import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HeaderPage from './HeaderPage';

const TripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [selectedDates, setSelectedDates] = useState({}); // Store selected dates for each trip

  useEffect(() => {
    // Fetch data from http://localhost:3000/trips when the component mounts
    fetch('https://136f-119-42-159-196.ngrok-free.app/trips')
      .then((response) => response.json())
      .then((data) => {
        setTrips(data);
        // Initialize selectedDates with default values
        const initialSelectedDates = {};
        data.forEach((trip) => {
          initialSelectedDates[trip.id] = {
            dateFrom: new Date(),
            dateTo: new Date(),
          };
        });
        setSelectedDates(initialSelectedDates);
      })
      .catch((error) => console.error('Error fetching trips:', error));
  }, []);

  const handleDateChange = (id, field, selectedDate) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [id]: {
        ...prevDates[id],
        [field]: selectedDate,
      },
    }));
  };

  const calculateUpdatedPrice = (basePrice, days) => basePrice * days;

  // Function to calculate the updated price based on days and date difference
  const calculatePriceWithDateDifference = (basePrice, days, dateFrom, dateTo) => {
    const timeDifference = Math.abs(dateTo - dateFrom);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const totalDays = days + daysDifference;

    return { price: calculateUpdatedPrice(basePrice, totalDays), days: totalDays };
  };

  const handleBookNow = (trip) => {
    // Calculate days and price
    const { price, days } = calculatePriceWithDateDifference(
      trip.basePrice,
      trip.days,
      selectedDates[trip.id].dateFrom,
      selectedDates[trip.id].dateTo
    );
  
    // Prepare data for the POST request
    const postData = {
      tripId: trip.id,
      tripName: trip.name,
      selectedDates: selectedDates[trip.id],
      totalPrice: price,
      days: days, // Include the days information in the postData
    };
  
    // Make a POST request to http://localhost:3000/product
    fetch('https://136f-119-42-159-196.ngrok-free.app/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response as needed
        alert('Order Placed');
      })
      .catch((error) => {
        console.error('Error booking:', error);
      });
  };
  
  return (
    <>
      <HeaderPage />
      <div className="container mt-4">
        <h2>Available Trips</h2>
        <div className="row">
          {trips.map((trip) => (
            <div key={trip.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={trip.img} className="card-img-top" height={'250px'} alt={trip.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{trip.name}</h5>
                  <p className="card-text">
                    Price: ${calculatePriceWithDateDifference(trip.basePrice, trip.days, selectedDates[trip.id].dateFrom, selectedDates[trip.id].dateTo).price}
                  </p>
                  <p className="card-text">Days: {calculatePriceWithDateDifference(trip.basePrice, trip.days, selectedDates[trip.id].dateFrom, selectedDates[trip.id].dateTo).days}</p>
                  <div className="mb-3">
                    <label className="form-label"> From: </label>
                    <DatePicker
                      selected={selectedDates[trip.id].dateFrom}
                      onChange={(date) => handleDateChange(trip.id, 'dateFrom', date)}
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> To:</label>
                    <DatePicker
                      selected={selectedDates[trip.id].dateTo}
                      onChange={(date) => handleDateChange(trip.id, 'dateTo', date)}
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                </div>
                <div className="card-footer d-grid">
                  <button className="btn btn-dark" onClick={() => handleBookNow(trip)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TripsPage;
