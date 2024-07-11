import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        padding: "14px 4px",
        backgroundColor: "lightblue",
      }}
    >
      <Link
        to={"/"}
        style={{
          color: "red",
          fontSize: "20px",
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        home
      </Link>
      <Link
        to={"/cart"}
        style={{
          color: "red",
          fontSize: "20px",
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        cart {cartData.length}
      </Link>
    </div>
  );
};

export default Navbar;
