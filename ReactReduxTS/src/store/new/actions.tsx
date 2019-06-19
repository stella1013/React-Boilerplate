import { action } from 'typesafe-actions';
import {
	ActionTypes,
	ScreenTypes,
	DataActionTypes,
	SearchBarActionTypes,
	DataRequestTypes,
	DataSortingTypes,
	MapZoomTypes,
	PrefActionTypes,
	// FacilitiesKeys,
	NormalData,
	SFacKeys,
} from './types';
import DataResponse from 'models/DataResponse';

export function setAppTitle(appTitle: string) {
	return action(PrefActionTypes.APP_TITLE, appTitle);
}
export function changeView(toView?: ScreenTypes) {
	return action(ActionTypes.CHANGE_SCREEN, toView);
}
export function setDataSortType(sortType: DataSortingTypes) {
	return action(ActionTypes.SORT_DATA, sortType);
}
export function setDefaultDataSortType(sortType: DataSortingTypes) {
	return action(PrefActionTypes.SET_DEFAULT_SORT_TYPE, sortType);
}
export function setDefaultZoomType(zoomType: MapZoomTypes) {
	return action(PrefActionTypes.SET_DEFAULT_ZOOM_TYPE, zoomType);
}
// using the word 'change' to differ from user interaction changes versus prefs
export function changeZoomType(zoomType: MapZoomTypes) {
	return action(ActionTypes.CHANGE_ZOOM_TYPE, zoomType);
}
export function setDefaultZoomLevel(zoom: number) {
	return action(PrefActionTypes.SET_DEFAULT_ZOOM_LEVEL, zoom);
}
export function changeZoomLevel(zoom: number) {
	return action(ActionTypes.CHANGE_ZOOM_LEVEL, zoom);
}
export function selectMarker(marker: string) {
	return action(ActionTypes.SELECT_MARKER, marker);
}
export function selectCard(card: string) {
	return action(ActionTypes.SELECT_CARD, card);
}
export function selectSearchType(type: string) {
	return action(ActionTypes.SELECT_SEARCHTYPE, type);
}
export function verifyFields(isValid: boolean) {
	return action(SearchBarActionTypes.VERIFY_FIELDS, isValid);
}
export function selectFacilityID(id: string) {
	return action(ActionTypes.SELECT_FACILITY_ID, id);
}
export function updateScrollYPos(yPos: number) {
	return action(ActionTypes.GET_SCROLL_YPOS, yPos);
}
export function updatePremiumLocations(list: []) {
	return action(ActionTypes.UPDATE_PREMIUM_LOCATIONS, list);
}
export function getData(dataRequested: DataRequestTypes, callback: any) {
	return action(SearchBarActionTypes.GET_DATA, dataRequested);
}
export function changemarkerselectionstatus(isInProgress: boolean) {
	return action(ActionTypes.MARKER_SELECT_STATUS, isInProgress);
}
export function showHidePopover(view: boolean) {
	return action(ActionTypes.CHANGE_PREMPOPOVER_VISIBILITY, view);
}
export function showAlert(displayAlert: boolean) {
	return action(ActionTypes.SHOW_ALERT, displayAlert);
}
export function normalizeData(data:NormalData) {
	return action(DataActionTypes.NORMALIZE_DATA, data);
}
export function changeLoadingStatus(isLoading:boolean) {
	return action(ActionTypes.CHANGE_LOADING_STATUS, isLoading);
}
export function getSortedData(data:SFacKeys) {
	return action(DataActionTypes.GET_SORTED_DATA, data);
}
export function getInitialData() {
	return action(SearchBarActionTypes.GET_INITIAL_DATA);
}
export function updateSearchFields(selectedValue: {
	displayValue: string;
	value: string;
	id: string;
}) {
	return action(SearchBarActionTypes.CHANGE_SEARCHFIELDS, selectedValue);
}

export function getFormPresetsFrmServer(
	searchformdata: { displayValue: string; value: string }[]
) {
	return action(SearchBarActionTypes.GET_SERVER_FORM_DATA, searchformdata);
}

export function dataReceived(data: DataResponse) {
	return action(DataActionTypes.DATA_RECEIVED, data);
}

export function dataError(error: Error) {
	return action(DataActionTypes.DATA_ERROR, error);
}
