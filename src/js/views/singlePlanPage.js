import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class SinglePlanPage extends React.Component {
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
					return <div className="container m-5 mx-auto parentForm p-3 px-5">bfgvhbjnmbhgvfc</div>;
				}}
			</Context.Consumer>
		);
	}
}
SinglePlanPage.propTypes = {
	history: PropTypes.object
};
