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
								<th className="text-left" scope="col">
									Position
								</th>
								<th className="text-left" scope="col">
									Date
								</th>
								<th className="text-left" scope="col">
									Time
								</th>
								<th className="text-left" scope="col">
									Magnetic Fields
								</th>
								<th className="text-left" scope="col">
									Humidity
								</th>
								<th className="text-left" scope="col">
									Temperature
								</th>
								<th className="text-left" scope="col">
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
												<td className="text-left">
													pitch : {item.pitch}
													<br />
													roll : {item.roll}
													<br />
													yaw : {item.yaw}
												</td>
												<td className="text-left">
													<br />
													{item.date}
												</td>
												<td className="text-left">
													<br />
													{item.time}
												</td>
												<td className="text-left">
													x axis : {item.mag_x} µT
													<br />y axis : {item.mag_y} µT
													<br />z axis : {item.mag_z} µT
												</td>
												<td className="text-left">
													<br />
													{item.humidity} %
												</td>
												<td className="text-left">
													<br />
													{item.temperature}
													{"\u2109"}
													{/* escape charrachter for f degrees*/}
												</td>
												<td className="text-left">
													<br />
													{item.atmospherePressure} psi
												</td>
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
