import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container m-5 ">
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									onChange={e => {
										this.setState({ email: e.target.value });
									}}
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small id="emailHelp" className="form-text text-muted">
									Well never share your email with anyone else.
								</small>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input
									onChange={e => this.setState({ password: e.target.value })}
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<div className="form-group form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" />
								<label className="form-check-label" htmlFor="exampleCheck1">
									Check me out
								</label>
							</div>
							<button
								onClick={() => actions.login(this.state.email, this.state.password, this.props)}
								type="submit"
								className="btn btn-primary">
								Submit
							</button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
