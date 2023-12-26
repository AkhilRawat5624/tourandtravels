import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const [Product, setProduct] = useState([]);
  const Navigate = useNavigate();

  const getData = () => {
    fetch("https://136f-119-42-159-196.ngrok-free.app/Product")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const totalPrice = () => {
    let full = 0;
    Product.forEach(items => {
      full = full + items.total;
    });
    return full;
  }

  useEffect(() => {
    getData();
    totalPrice();
  }, []);

  return (
    <>
      {Product.map(u =>
        <div className='col-md-4 border' key={u.id}>
          <h4>{u.itemname}</h4>
          <h4>Price</h4>
          <p>{u.rate}</p>

          <h4>Category</h4>
          <p>{u.category}</p>
        </div>
      )}
    </>
  );
}
