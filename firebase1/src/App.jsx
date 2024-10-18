// import { useState } from "react";
// import "./App.css";
// // import { app } from "./firebase";
// // import { Database, getDatabase, ref, set } from "firebase/database";
// import {App} from './firebase';
// import { Database , getDatabase, ref, set } from "firebase/database";

// function app() {
//   const [Obj, Setobj] = useState({
//     name: "",
//     age: "",
//   });
//   const Handlechange = (e) =>
//     Setobj({ ...Obj, [e.target.name]: e.target.value });
//   const AddData = (e) => {
//     e.preventDefault();
//     const db = getDatabase(App);
//     set(ref(db, `User/Students_Data/${Obj.name}`), Obj)
//     .then(() =>
//       alert("Data added")
//     )
//     Setobj({ name: "", age: "" }).catch(console.error);
//   };
//   return (
//     <>
//       <form onSubmit={AddData}>
//         <label htmlFor="name">Enter Name</label>
//         <input
//           type="text"
//           value={Obj.name}
//           name="name"
//           onChange={Handlechange}
//         />{" "}
//         <br />
//         <br />
//         <label htmlFor="age">Enter Age</label>
//         <input type="text" value={Obj.age} name="age" onChange={Handlechange} />
//         <br />
//         <br />
//         <button>Add Data</button>
//       </form>
//     </>
//   );
// }

// export default app;

// import React from "react";
// import { useState } from "react";
// import "./App.css";
// import { app } from "./firebase";
// import { getDatabase, ref, set } from "firebase/database";

// export default function UserFirebase() {
//   const db1 = getDatabase(app);

//   const [input, setInput] = useState({
//     name: "",
//     password: "",
//     email: "",
//     address: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(input.name, input.password, input.email, input.address);
//     set(ref(db1, "UserData/StudentData"), input)
//       .then(() => console.log("Success"))
//       .catch((err) => console.log("Error :" + err));
//     setInput({
//       name: "",
//       password: "",
//       email: "",
//       address: "",
//     });
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div>
//         <h2>Fill The Form</h2>
//       </div>
//       <br />
//       <form>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={input.name}
//             placeholder="Enter Your Name"
//             onChange={(e) => setInput({ ...input, name: e.target.value })}
//           />
//         </div>
//         <br />
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={input.password}
//             placeholder="Enter Your Password"
//             onChange={(e) => setInput({ ...input, password: e.target.value })}
//           />
//         </div>
//         <br />
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={input.email}
//             placeholder="Enter Your Name"
//             onChange={(e) => setInput({ ...input, email: e.target.value })}
//           />
//         </div>
//         <br />
//         <div>
//           <label>Address :</label>
//           <textarea
//             rows={5}
//             cols={50}
//             value={input.address}
//             placeholder="Enter your address here"
//             onChange={(e) => setInput({ ...input, address: e.target.value })}
//           />
//         </div>
//         <br />
//         <br />
//         <button type="submit" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }