import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStates } from "../../actions/stateActions";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter
} from "react-router-dom";

import Spinner from "../common/Spinner";
import TopNav from "./TopNav/TopNav";

import Dashboard from "./MainContent/Dashboard";
import NotFound from "../404/404";

import "./Layout.scss";

class Lay extends Component {
	componentDidMount() {
		this.props.getStates();
	}

	render() {
		const { states, statesLoading } = this.props.states;
		let dash;

		if (states === null || statesLoading) {
			dash = <Spinner />;
		} else {
			dash = (
				<>
					<div className="right">
						<TopNav />
						<Switch>
							<Route
								exact
								path="/dashboard"
								states={states}
								component={Dashboard}
							/>

							<Route component={NotFound} />
						</Switch>
					</div>
				</>
			);
		}

		return (
			<Router>
				<div className="wrapper">{dash}</div>
			</Router>
		);
	}
}

Lay.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	states: state.states
});

export default withRouter(
	connect(
		mapStateToProps,
		{ getStates }
	)(Lay)
);
