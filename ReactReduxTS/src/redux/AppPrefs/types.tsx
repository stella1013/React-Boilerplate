
export const APP_TITLE = 'APP_TITLE';
export const SET_DEFAULT_ZOOM_TYPE = 'SET_DEFAULT_ZOOM_TYPE';
export const SET_DEFAULT_ZOOM_LEVEL = 'SET_ZOOM_LEVEL';
export const SET_DEFAULT_SORT_TYPE = 'SET_DEFAULT_SORT_TYPE';

interface setAppTitleAction {
	type: typeof APP_TITLE;
	payload: string;
}
interface setDefaultZoomLevelAction {
	type: typeof SET_DEFAULT_ZOOM_LEVEL;
	payload: number;
}
interface setDefaultDataSortTypeAction {
	type: typeof SET_DEFAULT_SORT_TYPE;
	payload: string;
}
interface setDefaultZoomTypeAction {
	type: typeof SET_DEFAULT_ZOOM_TYPE;
	payload:string;
}

export type AppPrefsActionTypes =
	| setAppTitleAction
	| setDefaultZoomLevelAction 
	|setDefaultDataSortTypeAction
	| setDefaultZoomTypeAction;
