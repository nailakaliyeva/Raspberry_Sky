import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
						<div className="mt-5">
							<div id="stars" />
							<div id="stars2" />
							<div id="stars3" />
							<div className="container box mx-auto pt-3 mt-2 mb-5">
								<div className="text-center login">
									<h2 className="pinkPart text-white">
										Log
										<span className="pinkPart">In</span>
									</h2>
								</div>
								<div className="form-group col-7 m-auto">
									<label className="my-3" htmlFor="exampleInputEmail1">
										Enter your username
									</label>
									<input
										onChange={e => {
											this.setState({ email: e.target.value });
										}}
										type="text"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="johnnie_doe"
									/>
								</div>
								<div className="form-group col-7 m-auto">
									<label className="my-3" htmlFor="exampleInputPassword1">
										Password
									</label>
									<input
										onChange={e => this.setState({ password: e.target.value })}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="12345464"
									/>
								</div>
								<div className="text-center m-auto">
									<button
										onClick={() => {
											actions.login(this.state.email, this.state.password, this.props);
										}}
										type="submit"
										className="btn btn-info btn-lg loginBtn">
										Submit
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
Login.propTypes = {
	history: PropTypes.object
};
