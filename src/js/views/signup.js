import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Signup extends React.Component {
	constructor() {
		super();

		this.state = {
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
						<div className="container m-5 ">
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
										<option value="Miami">Miami</option>
										<option value="Zimbabwe">Zimbabwe</option>
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
									<label htmlFor="inputCity">Country</label>
									<input
										onChange={e => this.setState({ country: e.target.value })}
										type="text"
										className="form-control"
										id="inputCity"
									/>
								</div>
							</div>

							<div className="form-row">
								<button
									onClick={() => {
										let person = {
											username: "Naila",
											first_name: this.state.first_name,
											last_name: this.state.last_name,
											email: this.state.email,
											password: this.state.password,
											state: this.state.state,
											//confirm_password: this.state.confirm_password,
											address: this.state.address,
											city: this.state.city,
											zipcode: this.state.zipcode,
											country: this.state.country,
											products: []
										};
										console.log("person", person);
										actions.addUser(person, this.props);
									}}
									className="btn btn-primary"
									type="submit">
									Submit form
								</button>
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
