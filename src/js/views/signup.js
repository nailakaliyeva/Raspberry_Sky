import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Signup extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirm_password: "",
			state: "",
			address: "",
			city: "",
			zipcode: "",
			state: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div id="stars" />
							<div id="stars2" />
							<div id="stars3" />
							<div className="container m-2  parentForm mx-auto">
								<div className="text-center login">
									<h2 className="pinkPart text-white">
										Sign
										<span className="pinkPart">Up</span>
									</h2>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputAddress">First Name</label>
										<input
											onChange={e => this.setState({ first_name: e.target.value })}
											type="text"
											className="form-control"
											id="first"
											placeholder
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputAddress2">Last Name</label>
										<input
											onChange={e => this.setState({ last_name: e.target.value })}
											type="text"
											className="form-control"
											id="last"
											placeholder
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputAddress">Username</label>
										<input
											onChange={e => this.setState({ username: e.target.value })}
											type="text"
											className="form-control"
											id="first"
											placeholder
										/>
									</div>

									<div className="form-group col">
										<label htmlFor="inputAddress">Email</label>
										<input
											onChange={e => this.setState({ email: e.target.value })}
											type="text"
											className="form-control"
											id="email"
											placeholder
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword">Password</label>
										<input
											onChange={e => this.setState({ password: e.target.value })}
											type="password"
											className="form-control"
											id="password"
											placeholder
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword2">Confirm Password</label>
										<input
											onChange={e => this.setState({ confirm_password: e.target.value })}
											type="password"
											className="form-control"
											id="confirmpassword"
											placeholder
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label htmlFor="inputAddress">Address</label>
										<input
											onChange={e => this.setState({ address: e.target.value })}
											type="text"
											className="form-control"
											id="address"
											placeholder
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputCity">City</label>
										<input
											onChange={e => this.setState({ city: e.target.value })}
											type="text"
											className="form-control"
											id="city"
										/>
									</div>
									<div className="form-group col-md-4">
										<label htmlFor="inputState">State</label>
										<select
											onChange={e => this.setState({ state: e.target.value })}
											id="state"
											className="form-control">
											<option selected>Pick a state</option>
											<option value="Florida">Florida</option>
											<option value="New York">New York</option>
											<option value="California">California</option>
											<option value="Texas">Texas</option>
											<option value="North Carolina">North Carolina</option>
											<option value="South Carolina">South Carolina</option>
											<option value="Massachussets">Massachussets</option>
											<option value="Georgia">Georgia</option>
											<option value="Alabama">Alabama</option>
											<option value="Virginia">Virginia</option>
											<option value="Louisiana">Louisiana</option>
											<option value="New Mexico">New Mexico</option>
											<option value="Nevada">Nevada</option>
											<option value="Ohio">Ohio</option>
											<option value="Oregon">Oregon</option>
											<option value="Delaware">Delaware</option>
											<option value="New Jersey">New Jersey</option>
											<option value="Indiana">Indiana</option>
											<option value="Colorado">Colorado</option>
										</select>
									</div>
									<div className="form-group col-md-2">
										<label htmlFor="inputZip">Zip</label>
										<input
											onChange={e => this.setState({ zipcode: e.target.value })}
											type="text"
											className="form-control"
											id="zip"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputState">Country</label>
										<select
											onChange={e => this.setState({ country: e.target.value })}
											id="country"
											className="form-control">
											<option selected>Pick a country</option>
											<option value="United States of America">United States of America</option>
											<option value="Canada">Canada</option>
											<option value="Israel">Israel</option>
											<option value="Mexico">Mexico</option>
											<option value="Brazil">Brazil</option>
											<option value="United Kingdom">United Kingdom</option>
											<option value="Germany">Germany</option>
											<option value="France">France</option>
											<option value="Russian Federation">Russian Federation</option>
											<option value="Ukraine">Ukraine</option>
											<option value="Belarus">Belarus</option>
											<option value="India">India</option>
											<option value="Cuba">Cuba</option>
											<option value="Japan">Japan</option>
											<option value="China">China</option>
											<option value="Italy">Italy</option>
											<option value="Spain">Spain</option>
											<option value="Kazakhstan">Kazakhstan</option>
											<option value="Denmark">Denmark</option>
										</select>
									</div>
								</div>

								<div className="form-row ">
									<button
										onClick={() => {
											let person = {
												username: this.state.username,
												first_name: this.state.first_name,
												last_name: this.state.last_name,
												email: this.state.email,
												password: this.state.password,
												state: this.state.state,

												address: this.state.address,
												city: this.state.city,
												zipcode: this.state.zipcode,
												country: this.state.country,
												products: []
											};
											console.log("person", person);
											actions.addUser(person, this.props);
										}}
										className="btn btn-info btn-lg signUpBtn mx-auto"
										type="submit">
										Submit form
									</button>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Signup.propTypes = {
	history: PropTypes.object
};
