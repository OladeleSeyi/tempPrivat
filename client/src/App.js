// React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";

import NotFound from "./components/404/404";
import Lay from "./components/dashboard/Lay";

// Style
import "./App.scss";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = JSON.parse(localStorage.jwtToken);
	setAuthToken(token);

	// Decode token and get user info and exp
	const decoded = jwt_decode(token);

	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());

		// Redirect to login
		window.location.href = "./";
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/register" component={Register} />
							{/* <PrivateRoute exact path="/dashboard" component={Layout} /> */}
							<PrivateRoute exact path="/dashboard" component={Lay} />
							<Route component={localStorage.jwtTokenTeams ? Lay : NotFound} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}
export default App;
