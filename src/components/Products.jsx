import React, { useState, useEffect, useContext } from "react";
import "./Products.css";
import { CartContext } from "./CartContext";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(
    (product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Ensure correct field name
  );

  if (loading) {
   return (
     <div className="loading-container">
       <div className="spinner"></div>
       <p>Loading products...</p>
     </div>
   );
  }

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images}
                alt={product.title} 
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.title}</h3>{" "}
              
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products match your search!</p>
        )}
      </div>
    </div>
  );
};

export default Products;
