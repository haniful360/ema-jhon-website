import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handlerAddtoCart = (product) => {
    console.log(product)
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product}
            handlerAddtoCart = {handlerAddtoCart}
            ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summery</h2>
      </div>
    </div>
  );
};

export default Shop;
