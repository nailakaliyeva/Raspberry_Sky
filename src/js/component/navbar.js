import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar navbar-light bg-light mb-3">
							<Link to="/home">
								<a className="navbar-brand mb-0 h1">Raspberry Sky Home Page</a>
							</Link>
							<Link to="/subscribe">
								<a className="navbar-brand mb-0 h1 mx-auto">Subscription Plans</a>
							</Link>
							<div className="ml-auto">
								{store.currentUser !== null ? (
									<Link to="/logout">
										<a className="navbar-brand mb-0 h1">Logout</a>
									</Link>
								) : (
									<Link to="/login">
										<a className="navbar-brand mb-0 h1">Login</a>
									</Link>
								)}
								<Link to="/signup">
									<a className="navbar-brand mb-0 h1">Sign up</a>
								</Link>
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
