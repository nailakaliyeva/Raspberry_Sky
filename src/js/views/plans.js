import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Plans extends React.Component {
	render() {
		return (
			<div className="container m-5 ">
				<div className="card-deck ml-5">
					<div className="card">
						<h3 className="m-2 text-center">Silver</h3>
						<img
							src="http://lorempixel.com/output/sports-q-c-640-480-3.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<button type="button" className="btn btn-info">
								Buy
							</button>
						</div>
					</div>
					<div className="card">
						<h3 className="m-2 text-center">Gold</h3>
						<img
							src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<button type="button" className="btn btn-info">
								Buy
							</button>
						</div>
					</div>
					<div className="card">
						<h3 className="m-2 text-center">Platinum</h3>
						<img
							src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<button type="button" className="btn btn-info">
								Buy
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
