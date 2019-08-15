import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Status Page</h1>
				<button type="button" className="btn btn-danger">
					Retrieve data
				</button>
				<ul className="list-group">
					<table className="table table-dark">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Time</th>
								<th scope="col">Magnetic Fields</th>
								<th scope="col">Speed</th>
								<th scope="col">Temperature</th>
								<th scope="col">Atmosphere Pressure</th>
							</tr>
						</thead>
						<tbody>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.sessions.map((item, index) => {
										return (
											<tr key={index}>
												<td>{item.id}</td>
												<td>{item.time}</td>
												<td>{item.magneticField} tesla</td>
												<td>{item.speed} fps</td>
												<td>
													{item.temperature}
													{"\u2109"}
													{/* escape charrachter for f degrees*/}
												</td>
												<td>{item.atmospherePressure} psi</td>
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
