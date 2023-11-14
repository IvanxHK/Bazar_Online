import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("searchQuery:", searchQuery);

    if (searchQuery.trim() !== "") {
      axios
        .get(`http://localhost:3000/api/items?q=${searchQuery}`)
        .then((response) => {
          console.log("Resultados:", response.data);
          
        navigate(`/items/${searchQuery}`);
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
        });
    } else {
      console.error("Error en la solicitud:", "Ingresa búsqueda");

    }
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>Bazar Online</h1>
      <img
        src="https://images.vexels.com/media/users/3/141185/isolated/preview/b2c7de1951d5d57e9305c96ca875e170-bolsas-de-compra.png"
        alt="Bazar Online"
        style={{ width: "200px" }}
      />
      <h3>Búsqueda de Productos</h3>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          console.log("searchQuery:", e.target.value);
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchPage;

