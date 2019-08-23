import React from "react";
import { Link } from "react-router-dom";
import { Plans } from "./plans";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="heads">
					<div className="container">
						<div className="">
							<div id="stars" />
							<div id="stars2" />
							<div id="stars3" />
						</div>
					</div>
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-4 text-white">Fluid jumbotron</h1>
							<img
								className="raspimg"
								src={
									"https://raspitutorial.com/wp-content/uploads/2019/04/Raspberry_Pi_3_illustration.svg_.png"
								}
							/>
							<img
								className="raspimg2"
								src="https://projects-static.raspberrypi.org/projects/getting-started-with-the-sense-hat/653ef80ded139ef3aa6e17c5f24936e6c9b63b6a/en/images/sense-hat.png"
							/>
						</div>
					</div>

					<p>
						<Link to="/subscribe">
							<a className="navbar-brand mb-0 h1 ">
								<h3 className="m-3">Click here to choose your subscription plan</h3>
							</a>
						</Link>
					</p>
				</header>
			</div>
		);
	}
}
