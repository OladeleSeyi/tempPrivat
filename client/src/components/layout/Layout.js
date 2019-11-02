import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import "../../styles/materialize.min.css";
import Login from "../auth/Login";
import Register from "../auth/Register";

class Layout extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Landing />
			</Router>
		);
	}
}

export default Layout;
