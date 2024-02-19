import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PolicyHolderForm from './PolicyHolderForm'; // Import the PolicyHolderForm component
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Policy from "./components/Policy";

function App() {
  // let tasks = useStore((store) => store.tasks);
  // tasks = JSON.stringify(tasks);
  // console.log("Hi");
  // const addTask = useStore((store) => store.addTask);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}
export default App;
