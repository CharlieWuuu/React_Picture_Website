import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './assets/pages/Homepage';
import About from './assets/pages/About';
import Page404 from './assets/pages/Page404';
import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter basename="/React_Picture_Website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
