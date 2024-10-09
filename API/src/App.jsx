import { useEffect, useState } from "react";
import "./App.css";

import Axios from "./Axios";

function App() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInput(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* API - Application Programming Interface */}
      {/* fetch */}
      <Axios />
    </>
  );
}

export default App;
