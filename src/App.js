import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { UseMountDemo } from './UseMountDemo';
import './style.css';

export default function App() {
  // const [users, setUser] = useState();

  // useEffect(() => {}, []);

  return (
    <>
      <p>React Custom Hooks</p>
      <UseMountDemo />
      <a href="usemountdemo">Use Mount Demo</a>
      <BrowserRouter>
        <Routes>
          <Route index path="/usemountdemo" element={<UseMountDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
