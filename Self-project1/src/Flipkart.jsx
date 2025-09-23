import { useEffect, useState } from "react";
import "./Flipkart.css";

function Flipkart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/flipkart.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>    
    <div>
      <h1>Flipkart Products</h1>
      <div>
        {items.map((item) => (
          <div className="card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Model : {item.model}</p>
            <p>Offer Price : {item.price}</p>
            <p>Ratings : {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
    </>

  );
}

export default Flipkart;
