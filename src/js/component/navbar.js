import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
export class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar navbar-light mb-3 ">
							<Link to="/home">
								<i className="fas fa-user-astronaut fa-3x text-white icons" />
								<a className="navbar-brand mb-0 h1 title-name">
									<span className="rasp">Raspberry</span> <span className="sky">Sky</span>
								</a>
							</Link>
							<div className="ml-auto">
								{store.currentUser !== null ? (
									<Link to="/login" onClick={() => actions.logout()} className="navbar-brand mb-0 h1">
										<span id="signups">Logout</span>
									</Link>
								) : (
									<span>
										{/*<Link to="/subscribe">
											<a className="navbar-brand mb-0 h1 mx-auto text-white">Subscriptions</a>
										</Link>*/}
										<Link to="/login">
											<a className="navbar-brand mb-0 h1" id="signups">
												Login
											</a>
										</Link>
										<Link to="/signup">
											<a className="navbar-brand mb-0 h1" id="signups">
												Sign up
											</a>
										</Link>
									</span>
								)}
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
Navbar.propTypes = {
	history: PropTypes.object
};
