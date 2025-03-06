import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Register from "./Register";
import Login from "./Login";

function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
