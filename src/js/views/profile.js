import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Profile extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-between mt-5">
					<h1 className="text-center text-danger">Status Page</h1>
					<button type="button" className="btn btn-danger">
						Retrieve data
					</button>
				</div>
				<ul className="list-group mt-3">
					<table className="table table-dark">
						<thead>
							<tr>
								<th className="text-center" scope="col">
									ID
								</th>
								<th className="text-center" scope="col">
									{" "}
									Date
								</th>
								<th className="text-center" scope="col">
									Time
								</th>
								<th className="text-center" scope="col">
									Magnetic Fields
								</th>
								<th className="text-center" scope="col">
									Speed
								</th>
								<th className="text-center" scope="col">
									Temperature
								</th>
								<th className="text-center" scope="col">
									Atmosphere Pressure
								</th>
							</tr>
						</thead>
						<tbody>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.sessions.map((item, index) => {
										return (
											<tr key={index}>
												<td className="text-center">{item.id}</td>
												<td className="text-center">{item.date}</td>
												<td className="text-center">{item.time}</td>
												<td className="text-center">{item.magneticField} tesla</td>
												<td className="text-center">{item.speed} fps</td>
												<td className="text-center">
													{item.temperature}
													{"\u2109"}
													{/* escape charrachter for f degrees*/}
												</td>
												<td className="text-center">{item.atmospherePressure} psi</td>
											</tr>
										);
									});
								}}
							</Context.Consumer>
						</tbody>
					</table>
				</ul>
				<br />
			</div>
		);
	}
}
