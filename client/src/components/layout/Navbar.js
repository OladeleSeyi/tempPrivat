import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<div className="navbar-fixed teal darken-3">
				<nav className="z-depth-3	 teal darken-3">
					<Router>
						<Link
							to="/"
							style={{
								fontFamily: "monospace"
							}}
							className="col s5 brand-logo  black-text"
						>
							NITDA Data Collection Portal
						</Link>
					</Router>
				</nav>
			</div>
		);
	}
}

export default Navbar;
