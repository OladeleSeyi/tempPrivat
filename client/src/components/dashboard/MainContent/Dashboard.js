import React, { Component } from "react";
import "./MainContent.scss";
import "./Dashboard.scss";

import { connect } from "react-redux";

import Modal from "./Modal/Modal";
import StateForm from "./StateForm/StateForm";

class Dashboard extends Component {
	state = {
		modal: false,
		edit: false,
		name: "",
		members: [],
		id: "",
		owner: {}
	};

	toggleModal = e => {
		this.setState({ modal: !this.state.modal, edit: false });
	};

	toggleEditModal = (name, members, id, owner, e) => {
		e.stopPropagation();

		this.setState({
			modal: !this.state.modal,
			edit: !this.state.edit,
			name: name,
			members: members,
			id: id,
			owner: owner
		});
	};

	render() {
		const { states } = this.props.states;

		let content;

		let statesData = states.sort().map(state => (
			<div
				key={state._id}
				className="project-icon"
				onClick={() => this.props.history.push(`/states/${state.stateId}`)}
			>
				<div className="project-name">{state.stateName}</div>
				<div
					className="project-info-button"
					onClick={this.toggleEditModal.bind(
						this,
						state.stateName,

						state.stateId,
						state.authorId
					)}
				>
					Edit project
				</div>
				<div className="project-info-button">Go to project</div>
			</div>
		));

		if (states.length > 0) {
			// At least one project
			content = (
				<>
					<button className="main-btn" onClick={this.toggleModal}>
						Create Another State
					</button>
					<div className="modal-wrapper">
						<Modal
							onClose={this.toggleModal}
							modal={this.state.modal}
							edit={this.state.edit}
							name={this.state.name}
							members={this.state.members}
							id={this.state.id}
							owner={this.state.owner}
						/>
					</div>
					<div className="projects-wrapper">{statesData}</div>
				</>
			);
		} else {
			// No projects
			content = (
				<>
					<div className="projects">
						<div className="no-projects">
							<h1 className="header">Enter States Data</h1>
							<button className="main-btn" onClick={this.toggleModal}>
								Enter State Data
							</button>
							<div className="modal-wrapper">
								<StateForm />
							</div>
						</div>
					</div>
				</>
			);
		}

		return (
			<div className="main-content">
				<h1 className="header">State Data</h1>
				{content}
				<StateForm />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	states: state.states
});

export default connect(
	mapStateToProps,
	{}
)(Dashboard);
