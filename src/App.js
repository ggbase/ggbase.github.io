import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import { HypixelContextProvider } from 'contexts';
import { FrontPage, NotFoundPage, PlayerPage } from 'pages';

function App() {
	const pinnedPlayer = Cookies.get('pinnedPlayer');

	return (
		<Switch>
			<Route exact path="/">
				{ pinnedPlayer ? 
					<Redirect to={`/player/${pinnedPlayer}`} /> : 
					<Redirect to={`/frontpage`} /> 
				}
			</Route>
			<Route path="/frontpage">
				<FrontPage />
			</Route>
			<Route path="/player/:slug">
				<HypixelContextProvider>
					<PlayerPage />
				</HypixelContextProvider>
			</Route>
			<Route default>
				<NotFoundPage />
			</Route>
		</Switch>
		);
}

export default App;
