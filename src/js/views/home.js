import React from "react";
import { Link } from "react-router-dom";
import { Plans } from "./plans";
import { Context } from "../store/appContext";
import Typed from "react-typed";
import "../../styles/demo.scss";
import { ScrollTo } from "react-scroll-to";
import Fade from "react-reveal/Fade";

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

					<div className="arrow bounce">
						<a
							className="fa fa-arrow-down fa-3x"
							href="#"
							onClick={() =>
								window.scrollTo({
									top: 780,
									behavior: "smooth"
								})
							}
						/>
					</div>
				</header>

				<section>
					<div className="first-section-head">
						<h2>The Mission</h2>
					</div>
					<div className="row">
						<div className="col">
							<Fade left>
								<img
									className="orbitlogo"
									src="https://www.trzcacak.rs/myfile/full/251-2510350_satellites-space-orbit-orbiting-telecommunication-world-map.png"
								/>
							</Fade>
						</div>
						<div className="col mission-p">
							<Fade right>
								<p>
									The mission to <b>low earth orbit</b> is to provide measurement data of the earths
									magnetic field, atmospheric pressure, temperature and several other measurements. As
									we progress, the <span>Raspberry sky </span> will be upgraded with higher grade
									sensors and provide even more data. In the near future the{" "}
									<span>Raspberry sky </span> will be available for rent and will be outfitted with
									cameras, an ambient light sensor, Geiger counter as well as several others such as a
									{"  "}
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
								</p>
							</Fade>
						</div>
					</div>
				</section>

				<section className="midsection">
					<div className="second-section-head">
						<h2 className="text-white">Technology</h2>
					</div>
					<div className="row">
						<div className="col">
							<p className="text-white">Stuff</p>
						</div>
						<div className="col">
							<img src="https://www.raspberrypi.org/learning/images/components/raspberry-pi.png" />
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
