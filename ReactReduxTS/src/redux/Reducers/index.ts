import { combineReducers } from 'redux';
import clientStateReducer from 'redux/ClientState/reducer';

export default combineReducers({
	clientState:clientStateReducer
});
