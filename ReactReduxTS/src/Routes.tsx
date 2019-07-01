import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from 'views/components/AsyncComponent';

const AsyncSplashScreen = asyncComponent(() => import('./views/containers/SplashScreen'));
const AsyncMapScreen= asyncComponent(() => import('./views/containers/MapScreen'));

export default (props:any) => (
	<Switch>
		<Route exact={true} path="/" component={AsyncSplashScreen} props={props}/>
		<Route path="/zip=:id" component={AsyncSplashScreen} props={props}/>
		<Route path="/zip=:id/mapscreen" component={AsyncMapScreen} props={props}/>
	</Switch>
);
