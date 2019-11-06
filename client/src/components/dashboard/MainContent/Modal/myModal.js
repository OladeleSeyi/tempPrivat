import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { getStates, updateState } from "../../../../actions/stateActions";

import "./Modal.scss";
import StateForm from "../StateForm/StateForm";

class myModal extends Component {
	state = {
		stateName: "",
		errors: {},
		stateId: "",
		stateData: {}
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.edit) {
			this.setState({
				stateName: nextProps.name,
				stateId: nextProps.id,
				stateData: nextProps.data
			});
		} else if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = e => {
		if (["name", "email"].includes(e.target.name)) {
			let members = [...this.state.members];
			members[e.target.dataset.id][e.target.name] = e.target.value;
			this.setState({ members });
		} else {
			this.setState({ [e.target.id]: e.target.value });
		}
	};

	onChance = e => {
		let { stateData } = { ...this.state };
		const currentState = stateData;
		let { id, value } = e.target;
		currentState[id] = value;
		console.log("logged", currentState);
		this.setState({ stateData: currentState });
	};

	onClose = e => {
		this.props.onClose && this.props.onClose(e);
		this.setState({
			projectName: "",
			members: [{ name: "", email: "" }],
			taskName: "",
			assignee: "",
			monthDue: "",
			dayDue: "",
			taskId: "",
			stateName: "",
			stateData: {}
		});
	};

	onSelectChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onUpState = async e => {
		e.preventDefault();

		function toString(o) {
			Object.keys(o).forEach(k => {
				if (typeof o[k] === "object") {
					return toString(o[k]);
				}

				o[k] = "" + o[k];
			});

			return o;
		}

		let newState = toString(this.state.stateData);

		await this.props.updateState(this.state.stateId, newState);
		this.onClose();
		window.location.reload();
	};

	render() {
		const { errors } = this.props;
		if (!this.props.modal) {
			return null;
		}

		document.onkeyup = e => {
			if (e.keyCode === 27 && this.props.modal) {
				this.onClose();
			}
		};

		// Edit state modal
		if (this.props.edit) {
			return (
				<div className="modal">
					<span className="close-modal" onClick={this.onClose}>
						&times;
					</span>
					<h1 className="header">
						Edit State Scores for {this.state.stateName}
					</h1>
					{/* <p className="created-by">
            Created by {this.props.owner.name} ({this.props.owner.email})
          </p> */}
					<form className="auth-form" onSubmit={this.onUpState}>
						<div className="form-group">
							<label>
								<div className="form-label">Percentage Of Budget for ICT </div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.proportionOfBudget}
									id="proportionOfBudget"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.proportionOfBudget}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">Special ICT Ministry</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.ictMinistry}
									id="ictMinistry"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.ictMinistry}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">
									Internet Access in State Secretatriat
								</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.internetAccessRate}
									id="internetAccessRate"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.internetAccessRate}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">Functional ICT Projects</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.ictProjects}
									id="ictProjects"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.ictProjects}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">Skill Type A Personnel</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.skillTypeA}
									id="skillTypeA"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.skillTypeA}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">Use of Official Mail</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.officialMailUse}
									id="officialMailUse"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.officialMailUse}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">Level of Computer Deployment </div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.useOfIct}
									id="useOfIct"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.useOfIct}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">General ICT operation Ability</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.genAbility}
									id="genAbility"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.genAbility}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">ICT for Education</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.ict4Learning}
									id="ict4Learning"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.ict4Learning}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">Use of ICT in State Judiciary</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.ict4Judiciary}
									id="ict4Judiciary"
									type="text"
									required
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.ict4Judiciary}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">
									Capacity To Assemble and Maintain ICT Infrastructure
								</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.techAbility}
									id="techAbility"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.techAbility}</div>
							</label>
						</div>
						<div className="form-group">
							<label>
								<div className="form-label">
									ICT Proficiency as Employment Criteria
								</div>
								<input
									onChange={this.onChance}
									value={this.state.stateData.ict4Employment}
									id="ict4Employment"
									type="text"
									placeholder="score"
									className="form-input"
								/>
								<div className="auth-error">{errors.ict4Employment}</div>
							</label>
						</div>

						<div className="split">
							<label htmlFor="stateWebsite" className="form-label">
								State Website
								<input
									type="number"
									id="stateWebsite"
									className="form-input"
									value={this.state.stateData.stateWebsite}
									error={errors.stateWebsite}
									onChange={this.onChance}
								/>
								<div className="auth-error">{errors.stateWebsite}</div>
							</label>
							<label htmlFor="ictFund" className="form-label">
								ICT Fund
								<input
									type="number"
									name="ictFund"
									id="ictFund"
									className="form-input"
									value={this.state.stateData.ictFund}
									error={errors.ictFund}
									onChange={this.onChance}
								/>
								<div className="auth-error">{errors.ictFund}</div>
							</label>
						</div>
						<div className="split">
							<label htmlFor="digitalFiling" className="form-label">
								Use of Digital Filing
								<input
									type="number"
									name="digitalFiling"
									id="digitalFiling"
									className="form-input"
									value={this.state.stateData.digitalFiling}
									error={errors.digitalFiling}
									onChange={this.onChance}
								/>
								<div className="auth-error">{errors.digitalFiling}</div>
							</label>
							<label htmlFor="intranetUse" className="form-label">
								Use of Intranet
								<input
									type="number"
									name="intranetUse"
									id="intranetUse"
									className="form-input"
									value={this.state.stateData.intranetUse}
									error={errors.intranetUse}
									onChange={this.onChance}
								/>
								<div className="auth-error">{errors.intranetUse}</div>
							</label>
						</div>
						<div className="split">
							<label htmlFor="ehr" className="form-label">
								Electronic Health Records
								<input
									type="number"
									name="ehr"
									id="ehr"
									className="form-input"
									value={this.state.stateData.ehr}
									error={errors.ehr}
									onChange={this.onChance}
								/>
								<div className="auth-error">{errors.ehr}</div>
							</label>
							<label htmlFor="videoConference" className="form-label">
								Use of Video Conferencing
								<input
									type="number"
									name="videoConference"
									id="videoConference"
									className="form-input"
									value={this.state.stateData.videoConference}
									error={errors.videoConference}
									onChange={this.onChance}
								/>
								<div className="auth-error">{errors.videoConference}</div>
							</label>
						</div>
						<div>
							<button
								type="submit"
								className="auth-button"
								onClick={this.onUpState}
							>
								Submit
							</button>
						</div>
					</form>
					{/* <div>
            <button
              className="main-btn update-project"
              onClick={this.updateProject.bind(this, this.props.id)}
            >
              Update Project
            </button>
            {this.props.owner.id === this.props.auth.user.id ? (
              <button
                className="main-btn delete-project"
                onClick={this.deleteProject.bind(this, this.props.id)}
              >
                Delete Project
              </button>
            ) : null}
          </div> */}
				</div>
			);
		}

		// Create project modal
		else
			return (
				<div className="modal">
					<span className="close-modal" onClick={this.onClose}>
						&times;
					</span>
					<StateForm />
				</div>
			);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	state: state.state,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{
		updateState,
		getStates
	}
)(withRouter(myModal));
