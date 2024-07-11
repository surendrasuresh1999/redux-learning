import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/CartSlice";
import { getProducts } from "../Store/ProductSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Something went wrong</p>
      ) : (
        <div className="card-container">
          {data.map((product, i) => (
            <div key={i} className="card">
              <img src={product.image} alt="cover" className="product-img" />
              <h1>{product.title}</h1>
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
