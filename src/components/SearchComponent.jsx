import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      axios
        .get(`http://localhost:3000/api/items?q=${searchQuery}`)
        .then((response) => {
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
    <div style={{ textAlign: "center" }}>
      {/* <h4>Bazar Online</h4> */}
      
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchComponent;
