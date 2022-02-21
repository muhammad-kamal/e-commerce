import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./_headNav.css";

function HeadNav({choosenItems}) {
  return (
    <>
      <nav className="nav nav-pills flex-column flex-sm-row container my-2">
        <NavLink className="flex-sm-fill text-sm-center nav-link navI" to={"/e-commerce"}>
          Home
        </NavLink>
        <NavLink
          className="flex-sm-fill text-sm-center nav-link navI"
          to={"/sign"}
        >
          Sign
        </NavLink>
        <NavLink
          className="flex-sm-fill text-sm-center nav-link navI"
          to={"/cart"}
        >
          <span>{[...new Set(choosenItems)].length}</span>
          Cart
        </NavLink>
      </nav>
    </>
  );
}

export default HeadNav;
