import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/home">
					<a className="navbar-brand mb-0 h1">Raspberry Sky Home Page</a>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<a className="navbar-brand mb-0 h1">Login</a>
					</Link>
					<Link to="/signup">
						<a className="navbar-brand mb-0 h1">Sign up</a>
					</Link>
				</div>
			</nav>
		);
	}
}
