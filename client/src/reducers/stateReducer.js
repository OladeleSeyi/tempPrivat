import {
	ADD_STATE,
	GET_STATE,
	STATE_LOADING,
	GET_STATES,
	STATES_LOADING,
	UPDATE_STATE
} from "../actions/types";

const initialState = {
	states: [],
	state: [],
	statesLoading: false,
	stateLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_STATE:
			return {
				...state,
				states: [action.payload, ...state.states]
			};

		case UPDATE_STATE:
			let index = state.states.findIndex(
				state => state.stateId === action.payload.stateId
			);
			state.states.splice(index, 1);
			return {
				...state,
				states: [action.payload, ...state.states]
			};
		case GET_STATE:
			return {
				...state,
				state: action.payload,
				stateLoading: false
			};
		case GET_STATES:
			return {
				...state,
				states: action.payload,
				statesLoading: false
			};
		case STATE_LOADING:
			return {
				...state,
				stateLoading: true
			};
		case STATES_LOADING:
			return {
				...state,
				stateLoading: true
			};
		default:
			return state;
	}
}
