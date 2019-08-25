import React from "react";
import { Link } from "react-router-dom";
import { Plans } from "./plans";
import { Context } from "../store/appContext";
import Typed from "react-typed";
import "../../styles/demo.scss";
import * as Scroll from "react-scroll";
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="heads">
					<div className="jumbotron jumbotron-fluid mx-auto">
						<div className="container text-center">
							<h1 className="display-4 text-white justify-content-center head-title mb-3">
								<span className="alii">{"<"}</span>
								{"Developed to Measure and Relay"}
								<span className="alii">{"/>"}</span>
							</h1>

							<img
								className="raspimg"
								src={"https://i.pinimg.com/originals/e0/4b/36/e04b36d9ae2dce5cef8cc9698ba9abea.png"}
							/>

							<div className="starysky">
								<div id="stars" />
								<div id="stars2" />
								<div id="stars3" />
							</div>
						</div>
					</div>
					{/*<div className="typer text-center">
						Raspberry Sky Sensors include:
						<Typed
							strings={[
								" Barometer..",
								" Thermometer..",
								" Gyroscope..",
								" Magnetometer..",
								" Accelerometer.."
							]}
							typeSpeed={75}
							backSpeed={75}
							backDelay={2}
							loop
							smartBackspace
						/>
					</div>*/}
					<div className="arrow bounce">
						<a className="fa fa-arrow-down fa-3x" href="#" />
					</div>
				</header>

				<section>
					<div className="first-section-head">
						<h2>The Mission</h2>
					</div>
					<div className="row">
						<div className="col">
							<img
								className="orbitlogo"
								src="https://www.trzcacak.rs/myfile/full/251-2510350_satellites-space-orbit-orbiting-telecommunication-world-map.png"
							/>
						</div>
						<div className="col mission-p">
							<p>
								The mission to <b>low earth orbit</b> is to provide measurement data of the earths
								magnetic field, atmospheric pressure, temperature and several other measurements. As we
								progress, the raspberry sky will be upgraded with higher grade sensors and provide even
								more data. In the near future the raspberry sky will be for rent and will be outfitted
								with cameras, an ambient light sensor, Geiger countera as well as previous measurement
								sensors.
							</p>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

<p>
	<Link to="/subscribe">
		<a className="navbar-brand mb-0 h1 ">
			<h3 className="m-3">Click here to choose your subscription plan</h3>
		</a>
	</Link>
</p>;
