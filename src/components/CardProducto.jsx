import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating"; 

function CardProducto({ product }) {
  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto auto auto auto", 
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "5px", 
    margin: "10px",
  };

  const imageStyle = {
    gridRow: "1 / 2", 
    width: "100%", 
    height: "auto", 
    borderRadius: "5px", 
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "flex-start",
  };

  const titleStyle = {
   
    fontWeight: "bold",
    fontSize: "1rem", 
    margin: "5px 0", 
};

  const categoryStyle = {
   
    fontSize: "0.8rem", 
    margin: "2px 0", 
};

  const descriptionStyle = {
    margin: "2px 0",   
    fontSize: "0.8rem", 
  };

  const priceStyle = {
    fontWeight: "bold",
    fontSize: "1rem", 
};

  const ratingStyle = {
    gridColumn: "2 / 3",
    gridRow: "5 / 6",
  };

  const buttonStyle = {
    gridColumn: "1 / 2",
    gridRow: "6 / 7", 
  };

  return (
    <div className="card" style={cardStyle}>
      <Link to={`/item/${product.id}`} style={linkStyle}>
        <img src={product.thumbnail} alt={product.title} style={imageStyle} />
      </Link>
      <h2 style={titleStyle}>{product.title}</h2>
      <p style={categoryStyle}>Categoría: {product.category}</p>
      <p style={descriptionStyle}>{product.description}</p>
      <p style={priceStyle}>Precio: ${product.price}</p>
      <div style={ratingStyle}>
        <StarRating rating={product.rating} />
      </div>
      <div style={buttonStyle}>
        <Link to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
          <button>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProducto;
