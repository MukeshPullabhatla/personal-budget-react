import React from 'react';
import {
    Link
  } from "react-router-dom";
function Menu() {
  return (
    <nav
        role = "navigation"
        aria-label = "Main-menu"
        itemScope
        itemType = "http://schema.org/SiteNavigationElement"
    >
        <ul>
            <li><Link itemProp="url" to="/">Homepage</Link></li>
            <li><Link itemProp="url" to="/about">about</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
            
        </ul>
    </nav>
  );
}

export default Menu;