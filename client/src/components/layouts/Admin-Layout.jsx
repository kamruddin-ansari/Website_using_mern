import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*for using nested route*/}
      <Outlet />
    </>
  );
};

export default AdminLayout;
