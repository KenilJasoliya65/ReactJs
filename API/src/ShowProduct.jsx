import React from "react";
import "./App.css";

export default function ShowProduct({ img, price, dec, cat }) {
  return (
    <div>
      <div className="card">
        <img src={img} alt="" width="60%" />
        <p>Price : {price}</p>
        <p>Description : {dec}</p>
        <p>Category : {cat}</p>
      </div>
    </div>
  );
}
