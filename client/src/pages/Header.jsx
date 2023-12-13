import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/notes">Notes</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
