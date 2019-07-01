import * as constants from './types';
import { GlobalState, DataSortingTypes } from 'store/types';
import { APP_TITLE, SET_DEFAULT_ZOOM_TYPE, SET_DEFAULT_SORT_TYPE, SET_DEFAULT_ZOOM_LEVEL } from './types';

const initState: GlobalState = {
	appTitle: 'Healthcare Providers and Services',
	defaultZip: '',
	defaultZoomType: '',
	zoom: 13,
	defaultSortType: DataSortingTypes.PREMIUM_FIRST
};
function globalStateReducer(
	state: GlobalState = initState,
	action: constants.AppPrefsActionTypes
	): GlobalState {
	switch (action.type) {
		case APP_TITLE:
			if (state.appTitle !== action.payload) {
				return { ...state, appTitle: action.payload };
			}
			return state;
		case SET_DEFAULT_ZOOM_TYPE:
			if (state.defaultZoomType !== action.payload) {
				return { ...state, defaultZoomType: action.payload };
			}
			return state;
		case SET_DEFAULT_SORT_TYPE:
			if (state.defaultSortType !== action.payload) {
				return { ...state, defaultSortType: action.payload };
			}
			return state;
		case SET_DEFAULT_ZOOM_LEVEL:
			if (state.zoom !== action.payload) {
				return { ...state, zoom: action.payload };
			}
			return state;
		default:
			return state;
	}
}
export default globalStateReducer;