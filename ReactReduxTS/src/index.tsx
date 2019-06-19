import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/new/store';

import 'index.css';
import 'style.css';
import App from 'containers/App';
import * as serviceWorker from 'serviceWorker';

// tslint:disable-next-line:max-line-length
ReactDOM.render(
	
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
