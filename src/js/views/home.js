import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="backspace">{/* <h1 className="innerrasp">Raspberry PI 3</h1>*/}</div>

				<p>
					<Link to="/subscribe">
						<a className="navbar-brand mb-0 h1 ">
							<h3 className="m-3">Click here to choose your subscription plan</h3>
						</a>
					</Link>
				</p>
			</div>
		);
	}
}
