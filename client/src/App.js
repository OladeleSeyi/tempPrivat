import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// Redux
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// Components
import moduleName from "./components/layout/Layout";
// Sass
import "./App.scss";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layout/Layout";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
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
		window.location.href = "./login";
	}
}
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App area">
						<Route exact path="/" component={Layout} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />

						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}
export default App;
