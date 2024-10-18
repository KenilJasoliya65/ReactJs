import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLFHYAowWXD5SxYoxZ9FXzDiWIXkLuRB0",
  authDomain: "kenil-fullstack.firebaseapp.com",
  databaseURL: "https://kenil-fullstack-default-rtdb.firebaseio.com",
  projectId: "kenil-fullstack",
  storageBucket: "kenil-fullstack.appspot.com",
  messagingSenderId: "433321514870",
  appId: "1:433321514870:web:1392b1535ae253cfac4c57",
  measurementId: "G-X35Z5QC98V",
  databaseURL: "https://kenil-fullstack-default-rtdb.firebaseio.com/",
};

export const App = initializeApp(firebaseConfig);
// export const fs = getFirestore(App);
