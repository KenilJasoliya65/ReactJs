import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLFHYAowWXD5SxYoxZ9FXzDiWIXkLuRB0",
  authDomain: "kenil-fullstack.firebaseapp.com",
  databaseURL: "https://kenil-fullstack-default-rtdb.firebaseio.com",
  projectId: "kenil-fullstack",
  storageBucket: "kenil-fullstack.appspot.com",
  messagingSenderId: "433321514870",
  appId: "1:433321514870:web:1392b1535ae253cfac4c57",
  measurementId: "G-X35Z5QC98V",
};

export const app = initializeApp(firebaseConfig);
