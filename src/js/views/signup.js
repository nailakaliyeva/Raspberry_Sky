import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Signup extends React.Component {
	render() {
		return (
			<div className="container m-5 ">
				<form>
					<div className="form-row">
						<div className="form-group col-md-5">
							<label htmlFor="inputEmail4">Card Number</label>
							<input type="email" className="form-control" id="cc" placeholder="################" />
						</div>
						<div className="form-group col-md-3">
							<label htmlFor="inputEmail4">CVC#</label>
							<input type="email" className="form-control" id="cvc" placeholder />
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="inputPassword4">Amount</label>
							<input type="password" className="form-control" id="amount" placeholder="Amount" />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputAddress">First Name</label>
							<input type="text" className="form-control" id="first" placeholder />
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputAddress2">Last Name</label>
							<input type="text" className="form-control" id="last" placeholder />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputCity">City</label>
							<input type="text" className="form-control" id="city" />
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="inputState">State</label>
							<select id="state" className="form-control">
								<option selected>Pick a state</option>
								<option value="Florida">Florida</option>
								<option value="Miami">Miami</option>
								<option value="Zimbabwe">Zimbabwe</option>
							</select>
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="inputZip">Zip</label>
							<input type="text" className="form-control" id="zip" />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label className="w-100" htmlFor="inputAddress">
								We accept
							</label>
							<div className="form-check bg-secondary text-white p-2 rounded credit">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="creditCard"
										defaultValue="option1"
									/>
									<label className="form-check-label" htmlFor="inlineradio1" />
									<i className="fab fa-cc-visa" />
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="creditCard"
										defaultValue="option2"
									/>
									<label className="form-check-label" htmlFor="inlineradio2" />
									<i className="fab fa-cc-visa" />
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="creditCard"
										defaultValue="option3"
									/>
									<label className="form-check-label" htmlFor="inlineradio3" />
									<i className="fab fa-cc-diners-club" />
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="creditCard"
										defaultValue="option4"
									/>
									<label className="form-check-label" htmlFor="inlineradio4" />
									<i className="fab fa-cc-apple-pay" />
								</div>
							</div>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputAddress2 text-">Message</label>
							<textarea
								type="text"
								className="form-control"
								id="message"
								rows={4}
								placeholder="Apartment, studio, or floor"
								defaultValue={""}
							/>
							Add any notes here
						</div>
					</div>
				</form>
			</div>
		);
	}
}
