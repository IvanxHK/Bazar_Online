import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardProducto from "./CardProducto";
import SearchComponent from "./SearchComponent";


function ResultsPage() {
  const { q } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/items?q=${q}`).then((response) => {
      setResults(response.data);
    });
  }, [q]);

  return (
    <div >
      <SearchComponent></SearchComponent>
      <h1>Resultados de Búsqueda</h1>
      <p>{`Mostrando ${results.length} resultados de "${q}"`}</p>
      <div className="productos">
        {results.map((product) => (
          <CardProducto key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
