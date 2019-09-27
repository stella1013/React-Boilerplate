import * as constants from './types';
import { ClientState } from 'redux/types';

const initState: ClientState = {
	appTitle: 'Healthcare Providers and Services'
};
function clientStateReducer(
	state: ClientState  = initState,
	action: constants.ClientStateActionTypes
	): ClientState  {
	switch (action.type) {
		case constants.APP_TITLE:
			if (state.appTitle !== action.payload) {
				return { ...state, appTitle: action.payload };
			}
			return state;
		default:
			return state;
	}
}
export default clientStateReducer;