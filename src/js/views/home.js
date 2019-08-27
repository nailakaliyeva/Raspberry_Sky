import React from "react";
import { Link } from "react-router-dom";
import { Plans } from "./plans";
import { Context } from "../store/appContext";
import Typed from "react-typed";
import "../../styles/demo.scss";
import { ScrollTo } from "react-scroll-to";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="heads">
					<div className="jumbotron jumbotron-fluid mx-auto">
						<div className="container text-center">
							<h1 className="display-4 text-white justify-content-center head-title mb-3">
								<span className="alii">{"<"}</span>
								{"Satellite access for everyone"}
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
							className="fa fa-arrow-down fa-3x "
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
					<div className="row first-section">
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
									The mission to launch a miniature <b>low earth orbit</b> is to provide measurement
									data of the earth&apos;s magnetic field, atmospheric pressure, temperature and
									several other measurements at an afforble price As we progress, the{" "}
									<span>Raspberry sky </span> will be upgraded with higher grade sensors and provide
									even more data. In the near future the <span>Raspberry sky </span> will be available
									for rent and will be outfitted with cameras, an ambient light sensor, Geiger counter
									as well as several others such as a{"  "}
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
						<div className="col mission-p">
							<Rotate top left>
								<p className="text-white">
									The <span> Raspberry Sky</span> was developed using in combination of a credit-card
									sized computer known as a Raspberry Pi along with an attachment known as a sense
									hat.
									<ul>
										<li>SoC: Broadcom BCM2837</li>
										<li>CPU: 4× ARM Cortex-A53, 1.2GHz</li>
										<li>GPU: Broadcom VideoCore IV</li>
										<li>RAM: 1GB LPDDR2 (900 MHz)</li>
										<li>Networking: 10/100 Ethernet, 2.4GHz 802.11n wireless</li>
									</ul>
								</p>
							</Rotate>
						</div>
						<div className="col">
							<Rotate top right>
								<img src="https://www.raspberrypi.org/learning/images/components/raspberry-pi.png" />
							</Rotate>
						</div>
						<div className="col pt-5">
							<Rotate bottom left>
								<img src="https://projects-static.raspberrypi.org/projects/getting-started-with-the-sense-hat/653ef80ded139ef3aa6e17c5f24936e6c9b63b6a/en/images/sense-hat.png" />
							</Rotate>
						</div>
						<div className=" col mission-p text-white">
							<Rotate bottom right>
								<p>
									The Sense hat has several sensors built-in this enables the{" "}
									<span> Raspberry Sky </span> to relay the information measured via sense hat through
									it&apos;s multiple sensors back to the user.
									<ul>
										<li>Gyroscope – angular rate sensor: +/-245/500/2000dps</li>
										<li>Accelerometer - Linear acceleration sensor: +/-2/4/8/16 g</li>
										<li>Magnetometer - Magnetic Sensor: +/- 4/8/12/16 gauss</li>
										<li>Barometer: 260 – 1260 hPa absolute range</li>
										<li>Temperature sensor</li>
										<li>Humidity sensor</li>
									</ul>
								</p>
							</Rotate>
						</div>
					</div>
				</section>

				<section>
					<div className="first-section-head">
						<h2 className="">Plans</h2>
					</div>
					<div>
						<Plans />
					</div>
				</section>
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
