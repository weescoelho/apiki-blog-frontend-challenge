import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import PostContent from "./pages/PostContent/PostContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/post/:slug' element={<PostContent />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
