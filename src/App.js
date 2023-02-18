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
      <a href=" https://fatfish.medium.com/4-custom-react-hooks-every-developer-should-know-106ca78c0bca">
        fatfish.medium.com
      </a>

      <BrowserRouter>
        <Routes>
          <Route index path="/usemountdemo" element={<UseMountDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
