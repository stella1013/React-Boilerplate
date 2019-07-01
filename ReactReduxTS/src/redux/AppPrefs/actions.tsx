import { DataSortingTypes, MapZoomTypes } from 'store/types';

import {
	AppPrefsActionTypes,
	APP_TITLE,
	SET_DEFAULT_ZOOM_LEVEL,
	SET_DEFAULT_SORT_TYPE,
	SET_DEFAULT_ZOOM_TYPE
} from './types';
/*
function setAppTitleAction(appTitle: string): AppPrefsActionTypes {
	return { type: APP_TITLE, payload: appTitle };
}
*/
const setAppTitleAction = (appTitle: string): AppPrefsActionTypes => 
	({ type: APP_TITLE, payload: appTitle });

function setDefaultZoomLevelAction(zoom: number): AppPrefsActionTypes {
	return { type: SET_DEFAULT_ZOOM_LEVEL, payload: zoom };
}

function setDefaultDataSortTypeAction(
	sortType: DataSortingTypes
): AppPrefsActionTypes {
	return { type: SET_DEFAULT_SORT_TYPE, payload: sortType };
}

function setDefaultZoomTypeAction(zoomType: MapZoomTypes): AppPrefsActionTypes {
	return { type: SET_DEFAULT_ZOOM_TYPE, payload: zoomType };
}
export default {
	setAppTitleAction,
	setDefaultZoomLevelAction,
	setDefaultDataSortTypeAction,
	setDefaultZoomTypeAction
};
/*
export function getInitialData() {
	return action(SearchBarActionTypes.GET_INITIAL_DATA);
}

export function getData(dataRequested: DataRequestTypes, callback: any) {
	return action(SearchBarActionTypes.GET_DATA, dataRequested);
}
*/
/* Later refactoring idea
const unsplashClient = new Unsplash({
	applicationId:
		"id",
	secret: "secret",
	callbackUrl: "callback"
});

export const fetchingPhotos = payload => ({
	type: FETCHING_PHOTOS, payload
});

export const setPhotos = payload => ({
	type: SET_PHOTOS, payload
});

export const fetchPhotos = term => dispatch => {
	dispatch(fetchingPhotos(true));
	return unsplashClient.search
		.photos(term, 1, 20)
		.then(toJson)
		.then(json => {
			dispatch(setPhotos(json));
			dispatch(fetchingPhotos(false));
		});
}
*/
