import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const {store, actions} = useContext(Context)
  const favorites = store.favorites
  
	return (
		<nav className="navbar navbar-dark mb-3" style={{backgroundColor: "rgba(51, 51, 51, 0.534)"}}>
      <Link to={"/"}>
      <img className="ms-5 " src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32" />
      </Link>
			
<div className="btn-group ms-4 me-4">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-regular fa-star" style={{color: "ffffff"}}></i>
  </button>
  <ul className="dropdown-menu">
					{favorites.map((favorite, index) => (
						<li key={index}>
							{favorite.name}
						</li>
					))}
				</ul>
</div>
		</nav>
	);
};
