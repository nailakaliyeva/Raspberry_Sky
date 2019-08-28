import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Profile extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<div className="d-flex justify-content-between mt-5">
					<h1 className="text-center text-danger">Status Page</h1>
                    <Context.Consumer>
                    {({store, actions})=> {
					<button onClick ={()=>actions.retrieveData} type="button" className="btn btn-danger">
						Retrieve data
					</button>}}
                    </Context.Consumer>
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
									let d = new Date();
									let da = d.getFullYear();
									let m = d.getMonth();
									let day = d.getDate();
									let dateOfRetrieving = m + 1 + "/" + day + "/" + da;
									let time = new Date();
									let hours = time.getHours();
									let mins = time.getUTCMinutes();
									if (mins < 10) {
										mins = "0" + mins;
									}

									return (
										store.sessions &&
										store.sessions.map((item, index) => {
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
														{dateOfRetrieving}
													</td>
													<td className="text-left">
														<br />
														{hours + ":" + mins}
													</td>
													<td className="text-left">
														x axis : {item.x_axis} µT
														<br />y axis : {item.y_axis} µT
														<br />z axis : {item.z_axis} µT
													</td>
													<td className="text-center">
														<br />
														{item.humidity} %
													</td>
													<td className="text-center">
														<br />
														{item.temperature}
														{"\u2109"}
														{/* escape charrachter for f degrees*/}
													</td>
													<td className="text-center">
														<br />
														{item.pressure} psi
													</td>
												</tr>
											);
										})
									);
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
