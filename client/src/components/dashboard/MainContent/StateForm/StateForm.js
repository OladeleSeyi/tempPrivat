import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addState } from "../../../../actions/stateActions";

import "./StateForm.scss";

class StateForm extends Component {
	constructor() {
		super();
		this.state = {
			proportionOfBudget: "",
			ictMinistry: "",
			internetAccessRate: "",
			ictProjects: null,
			skillTypeA: "",
			stateWebsite: "",
			officialMailUse: "",
			ictFund: "",
			useOfIct: "",
			genAbility: "",
			digitalFiling: "",
			intranetUse: "",
			ehr: "",
			ict4Learning: "",
			ict4Judiciary: "",
			techAbility: "",
			ict4Employment: "",
			videoConference: "",
			stateId: "",
			stateName: "",
			errors: {}
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onAddState = e => {
		e.preventDefault();
		const stateData = {
			proportionOfBudget: this.state.proportionOfBudget,
			ictMinistry: this.state.ictMinistry,
			internetAccessRate: this.state.internetAccessRate,
			ictProjects: this.state.ictProjects,
			skillTypeA: this.state.skillTypeA,
			stateWebsite: this.state.stateWebsite,
			officialMailUse: this.state.officialMailUse,
			ictFund: this.state.ictFund,
			useOfIct: this.state.useOfIct,
			genAbility: this.state.genAbility,
			digitalFiling: this.state.digitalFiling,
			intranetUse: this.state.intranetUse,
			ehr: this.state.ehr,
			ict4Learning: this.state.ict4Learning,
			ict4Judiciary: this.state.ict4Judiciary,
			techAbility: this.state.techAbility,
			ict4Employment: this.state.ict4Employment,
			videoConference: this.state.videoConference,
			stateId: this.state.stateId,
			stateName: this.state.stateName
		};
		this.props.addState(stateData);
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="">
				<h1 className="header">Fill in State Info</h1>

				<form className="auth-form" onSubmit={this.onAddState}>
					<div className="split">
						<label htmlFor="stateName" className="form-label">
							State Name
							<input
								type="text"
								id="stateName"
								className="form-input"
								value={this.state.stateName}
								error={errors.stateName}
								onChange={this.onChange}
								className="form-input"
							/>
							<div className="auth-error">{errors.stateName}</div>
						</label>
						<label htmlFor="stateId" className="form-label">
							State ID
							<input
								type="text"
								name="stateId"
								id="stateId"
								className="form-input"
								value={this.state.stateId}
								error={errors.stateId}
								onChange={this.onChange}
							/>
							<div className="auth-error">{errors.stateId}</div>
						</label>
					</div>
					<div className="form-group">
						<label>
							<div className="form-label">Percentage Of Budget for ICT </div>
							<input
								onChange={this.onChange}
								value={this.state.proportionOfBudget}
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
								onChange={this.onChange}
								value={this.state.ictMinistry}
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
								onChange={this.onChange}
								value={this.state.internetAccessRate}
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
								onChange={this.onChange}
								value={this.state.ictProjects}
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
								onChange={this.onChange}
								value={this.state.skillTypeA}
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
								onChange={this.onChange}
								value={this.state.officialMailUse}
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
								onChange={this.onChange}
								value={this.state.useOfIct}
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
								onChange={this.onChange}
								value={this.state.genAbility}
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
								onChange={this.onChange}
								value={this.state.ict4Learning}
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
								onChange={this.onChange}
								value={this.state.ict4Judiciary}
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
								onChange={this.onChange}
								value={this.state.techAbility}
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
								onChange={this.onChange}
								value={this.state.ict4Employment}
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
								value={this.state.stateWebsite}
								error={errors.stateWebsite}
								onChange={this.onChange}
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
								value={this.state.ictFund}
								error={errors.ictFund}
								onChange={this.onChange}
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
								value={this.state.digitalFiling}
								error={errors.digitalFiling}
								onChange={this.onChange}
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
								value={this.state.intranetUse}
								error={errors.intranetUse}
								onChange={this.onChange}
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
								value={this.state.ehr}
								error={errors.ehr}
								onChange={this.onChange}
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
								value={this.state.videoConference}
								error={errors.videoConference}
								onChange={this.onChange}
							/>
							<div className="auth-error">{errors.videoConference}</div>
						</label>
					</div>
					<div>
						<button
							type="submit"
							className="auth-button"
							onClick={this.onAddState}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

StateForm.propTypes = {
	addState: PropTypes.func.isRequired,
	states: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	states: state.states,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{
		addState
	}
)(withRouter(StateForm));
