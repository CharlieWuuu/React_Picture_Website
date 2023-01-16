import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import Footer from './assets/components/Footer';

const Layout = () => {
  return (
    <div>
      <nav>
        <div id="title">React Demo 網頁</div>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於這個網站</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
