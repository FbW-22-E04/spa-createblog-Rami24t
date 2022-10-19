import React from "react";
import Header from "./Header";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import Show from "./Show";
import Create from "./Create";
import Home from "./Home";
function App() {
  return (
    <>
  <BrowserRouter>
    <Header />
    <Routes >
      <Route path="/home" element={<Home/>}/>
      <Route path="/create" element={<Create />} />
      <Route path="/show" element={<Show />} />
    </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
