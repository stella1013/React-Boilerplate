import {
	ClientStateActionTypes,
	APP_TITLE
} from './types';

const setAppTitleAction = (appTitle: string): ClientStateActionTypes => 
	({ type: APP_TITLE, payload: appTitle });

export default {
	setAppTitleAction
};
