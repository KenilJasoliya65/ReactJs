import { useState } from "react";
import "./App.css";
import { App } from "./firebase";
import { Database, get, getDatabase, ref, remove, set } from "firebase/database";

function RealTime() {
  const [Obj, Setobj] = useState({
    name: "",
    age: "",
  });
  const db = getDatabase(App);

  const [DeleteShow, SetDeleteShow] = useState(null);

  const Handlechange = (e) =>
    Setobj({ ...Obj, [e.target.name]: e.target.value });

  const AddData = (e) => {
    e.preventDefault();
    set(ref(db,` User/Students_Data/${Obj.name}`), Obj).then(() =>
      alert("Data added")
    );
    Setobj({ name: "", age: "" }).catch(console.error);
  };

  const ChooseData = (e) =>{
    e.preventDefault();
    SetDeleteShow(true);
  }

  const DeleteData = (e) => {
    e.preventDefault();
    const DataRef = ref(db, `User/Students_Data/${Obj.name}`);
    get(DataRef)
    .then((snapshot)=>{
      if(snapshot.exists()){
      remove(DataRef)
      .then(()=> alert('Data Successfully Deleted'))
      .catch((err) => console.log(err));
      Setobj({name:""})
      }
      else{
        alert("Data not found in the database");
      }
    })
    .catch((err) => console.log("Error retrieving data:", err));
  };

  // const UpdateData = () => {

  // };
  return (
    <>
      {DeleteShow == null ? (
        <form onSubmit={AddData}>
          <label htmlFor="name">Enter Name : </label>
          <input
            type="text"
            value={Obj.name}
            name="name"
            onChange={Handlechange}
          />{" "}
          <br />
          <br />
          <label htmlFor="age">Enter Age : </label>
          <input
            type="text"
            value={Obj.age}
            name="age"
            onChange={Handlechange}
          />
          <br />
          <br />
          <button>Add Data</button>
          <br /> <br />
          <button onClick={ChooseData}>Delete Any Data?</button>
          {/* <button onClick={UpdateData}>Update Data</button> */}
        </form>
      ) : (
        <form>
          <h3>Which Data you want to Delete :</h3>
          <label htmlFor="name">Enter Data Name : </label>
          <input
            type="text"
            value={Obj.name}
            name="name"
            onChange={Handlechange}
          />
          <br />
          <br />
          <button onClick={DeleteData}>Delete Data</button>
        </form>
      )}
    </>
  );
}

export default RealTime;