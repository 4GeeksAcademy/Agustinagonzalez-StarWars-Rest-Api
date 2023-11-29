import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
      <Link to={"/"}>
			<h2 className="ms-4 me-4">Star Wars</h2>
      </Link>
<div className="btn-group ms-4 me-4">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   Favorites
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
		</nav>
	);
};
