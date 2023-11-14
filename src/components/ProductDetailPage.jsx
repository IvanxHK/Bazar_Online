import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "./StarRating"; 
import SearchComponent from "./SearchComponent"
function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/item/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const imagesContainerStyle = {
    display: "flex",
    justifyContent: "center", 
    flexWrap: "wrap", 
    gap: "10px", 
  };

  const imageStyle = {
    maxWidth: "150px", 
    height: "auto", 
    borderRadius: "10px", 
  };

  const titleStyle = {
    fontSize: "24px", 
    fontWeight: "bold", 
  };

  const descriptionStyle = {
    fontSize: "16px", 
  };

  const priceStyle = {
    fontSize: "20px", 
    fontWeight: "bold", 
  };

  const buttonStyle = {
    margin: "10px",
  };

  const handleCompra = () => {
    alert(`Producto ${product.title} comprado`);
  };

  return (
    <div style={containerStyle}>
      <SearchComponent />

      <div style={imagesContainerStyle}>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.title} style={imageStyle} />
        ))}
      </div>
      <h2 style={titleStyle}>{product.title}</h2>
      <p style={descriptionStyle}>{product.description}</p>
      <p style={descriptionStyle}>Marca: {product.brand}</p><div>
      <p style={descriptionStyle}>Stock: {product.stock}</p>
      <p style={priceStyle}>Descuento: {product.discountPercentage}%</p>
      <p style={descriptionStyle}>Precio: ${product.price}</p>
      <StarRating rating={product.rating} />
      <button style={buttonStyle} onClick={handleCompra}>
        Comprar
      </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
