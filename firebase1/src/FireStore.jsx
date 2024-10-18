import React, { useState } from "react";
import "./App.css";
import { fs } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function FireStore() {
  const [Input, SetInput] = useState({
    name: "",
    password: "",
  });

  const Handlechange = (e) =>
    SetInput({ ...Input, [e.target.name]: e.target.value });

  const AddData = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(fs, "Users"), Input);
      alert("Data added successfully");
      SetInput({ name: "", password: "" });
    } 
    catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add data");
    }
  };
  return (
    <>
      <form onSubmit={AddData}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={Input.name}
          onChange={Handlechange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={Input.password}
          onChange={Handlechange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FireStore;
