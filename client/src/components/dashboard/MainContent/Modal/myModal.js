import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addState } from "../../../../actions/stateActions";
import "./Modal.scss";

class myModal extends Component {
	state = {};
}

const mapStateToProps = state => ({
	auth: state.auth,
	states: state.states
});

export default connect(
	mapStateToProps,
	{ addState }
)(withRouter(myModal));
