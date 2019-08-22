import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Plans extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="card-deck mt-4">
							{store.products &&
								store.products.map((item, index) => {
									return (
										<div className="card" key={index}>
											<h3 className="m-2 text-center">{item.plan_name}</h3>
											<img
												src="http://lorempixel.com/output/sports-q-c-640-480-3.jpg"
												className="card-img-top"
												alt="..."
											/>
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">{item.description}</p>
												<button type="button" className="btn btn-info">
													Details
												</button>
											</div>
										</div>
									);
								})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
