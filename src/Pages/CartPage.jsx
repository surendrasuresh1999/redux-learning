import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Store/CartSlice";
const CartPage = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      {cartData.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>no cart data found</p>
        </div>
      ) : (
        cartData.map((product, i) => (
          <div key={i} className="card">
            <img src={product.image} alt="cover" className="product-img" />
            <h1>{product.title}</h1>
            <button
              onClick={() => {
                dispatch(removeItem(product.id));
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
