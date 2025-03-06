import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Register from "./Register";

function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
