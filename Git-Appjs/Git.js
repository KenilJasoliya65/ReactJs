
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Github-Pro/Home";
// import About from "./components/Github-Pro/About";


// import Crud from './components/Counter/Crud';  

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add, dec } from "./components/Redux/action";

// redux crud
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";
// redux crud
const App = () =>
  {
    

    const dispatch = useDispatch();
    const counter = useSelector((state) => state);
    return (
      <div>
     

        {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
       </Routes> */}

          {/* crud file */}
       {/* <Crud /> */}

       <h1>Counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(add(5))}>Inc</button>
      <button onClick={() => dispatch(dec(5))}>Dec</button>


        <h1>Todo List</h1>
        <TodoList />
      </div>


    );
  };
export default App;


