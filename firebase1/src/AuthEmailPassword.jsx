import React , {useState} from "react";
import {App} from './firebase';
import './App.css';
import {
    createUserWithEmailAndPassword , 
    getAuth , 
    signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(App);

export default function AuthEmailPassword()
{
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');

const signUpUser = (e) =>
{
    createUserWithEmailAndPassword(auth , 'himil@gmail.com' , '123456')
    .then(() => console.log("Sign up Success"))
    .catch((err) => console.log(err));
    setEmail('');
    setPass('');
};

const signInUser = (e) =>
{
    signInWithEmailAndPassword(auth, "himil@gmail.com", "123456")
      .then(() => console.log("Sign in Success"))
      .catch((err) => console.log(err));
      setEmail("");
      setPass("");
};

// const handleSubmit = (e) =>
// {
//     e.preventDefault();
//     console.log(email , pass);
//     createUserWithEmailAndPassword(auth , email , pass)
//         .then(() => console.log("Success sign up"))
//         .catch((err) => console.log(err));
//     setEmail(' ');
//     setPass(' ');
//     e.target.reset();
// };
    return (
      <div>
        <form action="">
            <input type="email" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password" 
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}/>
            <br />
            <br />
            {/* <button>Submit</button> */}
        </form>
        <br />
        <br />
        <button onClick={signUpUser}>SignUp</button>
        <button onClick={signInUser}>SignIn</button>
      </div>
    );


}

// import { useState, useEffect } from "react";
// import { app } from "./firebase";
// import "./App.css";
// import {
//   getFirestore,
//   addDoc,
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";

// function App() {
//   const firestore = getFirestore(app);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const querySnapshot = await getDocs(collection(firestore, "user"));
//       const userData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUsers(userData);
//     };
//     fetchUser();
//   }, [firestore]);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     await addDoc(collection(firestore, "user"), {
//       name: name,
//       email: email,
//     });
//     setName("");
//     setEmail("");
//   };

//   const deleteData = async (id) => {
//     await deleteDoc(doc(firestore, "user", id));
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const updateData = async (id, newName, newEmail) => {
//     await updateDoc(doc(firestore, "user", id), {
//       name: newName,
//       email: newEmail,
//     });
//     const updatedUsers = users.map((user) => {
//       if (user.id === id) {
//         return { id, name: newName, email: newEmail };
//       } else {
//         return user;
//       }
//     });
//     setUsers(updatedUsers);
//   };

//   return (
//     <>
//       <h1>FireStore</h1>
//       <form action="" onSubmit={submitForm}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       {users.map((user) => (
//         <div key={user.id}>
//           <li>
//             {user.name} {user.email}
//           </li>
//           <button onClick={() => deleteData(user.id)}>Delete</button>
//           <button
//             onClick={() =>
//               updateData(
//                 user.id,
//                 prompt("Enter new name:"),
//                 prompt("Enter new email:")
//               )
//             }
//           >
//             Update
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;