import { useEffect, useState } from "react";
import './SearchBus.css';

function FindBus() {
  const [buses, setBuses] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filtered, setFiltered] = useState([]);

 useEffect(() => {
  async function fetchData() {
    const res = await fetch("http://localhost:1000/bus"); 
    const data = await res.json();
    setBuses(data);      
    setFiltered(data);
  }
  fetchData();
}, []);
  console.log(buses);

  const handleSearch = () => {
    const results = buses.filter(
      (bus) =>
        bus.from.toLowerCase() === from.toLowerCase().trim() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );
    setFiltered(results);
  };


  return (
    <>
      <nav>
        <img
          src="https://imgs.search.brave.com/CBKxIYi5_bySwl2qN2qaR2Sp29VIMoGxJZAwwYkjVbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucmFpbHlhdHJp/LmluL3J5X2ltYWdl/c19wcm9kL0dyb3Vw/LTEwMzE5OTJ4LTE2/NzUyNDI4NTIucG5n"
          alt="logo"
        />
        <input type="text" placeholder="Search buses..." />
        <button>Search</button>
      </nav>

      <section>
        <div>
          <input value={from} onChange={(e) => setFrom(e.target.value)} type="text" placeholder="From" />
          <input value={to} onChange={(e) => setTo(e.target.value)} type="text" placeholder="To" />
          <input type="date" />
          <button onClick={handleSearch}>Book Bus</button>
        </div>

        <div>
          <h1>Available Buses</h1>
          {filtered.length > 0 ? (
            <ul>
              {filtered.map((bus) => (
                <li key={bus.id}>
                  <img src={bus.image} alt={bus.name} style={{ width: "200px", borderRadius: "8px" }} />
                  <h3>{bus.name}</h3>
                  <p>
                    Route: {bus.from} → {bus.to}
                  </p>
                  <p>Date: {bus.date}</p>
                  <p>Price: ₹{bus.price} | Seats: {bus.seat}</p>
                  <p>{bus.description}</p>
                  <button>Book Bus</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Buses found for this route.....</p>
          )}
        </div>
      </section>
    </>
  );
}

export default FindBus;