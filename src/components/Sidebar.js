import React from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css'

function Sidebar() {
  return (
    <nav className="sidebar bg-success col-md-3 text-white ">
      <ul className="navbar-nav row flex-nowrap">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <a className="nav-link" href={item.link}>
                <div className="row align-items-center">
                  <div className="col-auto me-2" id="icon">{item.icon}</div>
                  <div className="col" id="title">{item.title}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
