import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";

export default function Axios() {
  const [input, setInput] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((item) => {
        console.log(item.data);
        setInput(item.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {input.map((ele, index) => (
        <ShowProduct
          img={ele.image}
          price={ele.price}
          dec={ele.description}
          cat={ele.category}
        />

        
      ))}

      {/* <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {input.map((ele, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{ele.title}</td>
              <td>{ele.price}</td>
              <td>
                <img src={ele.image} />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
