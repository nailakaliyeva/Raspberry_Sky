import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
					deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
					provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
					fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
					est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
					voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
					aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
					recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
					maiores alias consequatur aut perferendis doloribus asperiores repellat.
				</p>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						className="embed-responsive-item"
						src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
						allowFullScreen
					/>
				</div>
				<p>
					<Link to="/subscribe">
						<a className="navbar-brand mb-0 h1 ">
							<h3 className="m-3">Click here to choose your subscription plan</h3>
						</a>
					</Link>
				</p>
			</div>
		);
	}
}
