import axios from "axios";

import {
	ADD_STATE,
	GET_STATES,
	UPDATE_STATE,
	GET_STATE,
	STATES_LOADING,
	STATE_LOADING,
	GET_ERRORS
} from "./types";

// Add State ICt Data
export const addState = stateData => dispatch => {
	console.log("statedata", stateData);

	axios
		.post("/api/state/add", stateData)
		.then(res =>
			dispatch({
				type: ADD_STATE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
export const updateState = (id, stateData) => dispatch => {
	axios
		.patch(`/api/state/put/${id}`, stateData)
		.then(res => {
			dispatch({
				type: UPDATE_STATE,
				payload: res.data
			});
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get all states data
export const getStates = () => dispatch => {
	dispatch(setStatesLoading());
	axios
		.get("/api/state/user")
		.then(res =>
			dispatch({
				type: GET_STATES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_STATES,
				payload: null
			})
		);
};
// Get Particular State
export const getState = id => dispatch => {
	dispatch(setStateLoading);
	axios
		.get(`/api/state/${id}`)
		.then(res =>
			dispatch({
				type: GET_STATE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_STATE,
				payload: null
			})
		);
};

//STATE LOADING
export const setStateLoading = () => {
	return {
		type: STATE_LOADING
	};
};

//STATEs LOADING
export const setStatesLoading = () => {
	return {
		type: STATES_LOADING
	};
};
