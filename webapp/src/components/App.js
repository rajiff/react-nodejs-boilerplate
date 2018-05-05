import React from 'react'

import ApplicationBar from './ApplicationBar';
import WelcomeView from './WelcomeView';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ApplicationBar/>
				<Router>
					<div>
						<Route exact path="/" render={() => <Redirect to="/welcome" />} />
						<Route exact path="/welcome" component={WelcomeView} />
					</div>
				</Router>
			</div>
		)
	}
}