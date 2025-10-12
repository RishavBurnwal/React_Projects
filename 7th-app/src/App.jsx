import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setData(data))   
      .catch((err) => console.log(err));
  }, []);

  const searched = data.filter((p) =>
    p.Pname.includes(search)
  );

  return (
    <div >
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searched.map((e, i) => (
        <div key={i}>
          <p>Product Name:  {e.Pname}</p>
          <a href={e.url} target="_blank" > Product Link </a>
          <p>Product rating : {e.rating} </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
