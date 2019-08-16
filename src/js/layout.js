import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Profile } from "./views/profile";
import { Home } from "./views/home";
import { Plans } from "./views/plans";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route path="/profile" component={Profile} />
							<Route path="/home" component={Home} />
							<Route path="/subscribe" component={Plans} />
							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
