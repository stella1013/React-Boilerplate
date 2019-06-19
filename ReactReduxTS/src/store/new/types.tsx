import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import DataResponse from 'models/DataResponse';

export interface GlobalState {
	appTitle: string;
	defaultZip: string;
	defaultZoomType: string;
	zoom: number;
	defaultSortType: string;
}
export interface SearchBarState {
	dataRequested: DataRequestTypes;
	isReady: boolean;
	validSearch:boolean;
	formValues: {
		searchTypeValue: {
			elementType: string;
			elementSize: string;
			elementConfig: {
				options: {
					value: string;
					displayValue: string;
				}[];
			};
			postLabel: string;
			selectedValue: {
				value: string;
				displayValue: string;
			};
		};
		zipCodeValue: {
			elementType: string;
			elementSize: string;
			elementConfig: {
				type: string;
				placeholder: string;
			};
			selectedValue: {
				value: string;
				displayValue: string;
			};
		};
		radiusValue: {
			elementType: string;
			elementSize: string;
			elementConfig: {
				options: {
					value: string;
					displayValue: string;
				}[];
			};
			postLabel: string;
			selectedValue: {
				value: string;
				displayValue: string;
			};
		};
	};
}

export interface DataState {
	data?: DataResponse;
	error?: Error;
}
export interface MyLocation {
	id: string;
	name: string;
	address1: string;
	address2: string;
	city: string;
	county: string;
	state: string;
	zip: string;
	phone: string;
	location: {
		type: string;
		coordinates: [number, number];
	};
	latitude: number;
	longitude: number;
}
export interface NormalLocation {
	[key: string]: MyLocation;
}

export interface FacilitiesKeys {
	normalizeddata: NormalData;
}
export interface NormalData {
	facilities: NormalLocation;
		facilityIDs: Array<string>;
		premiumContent:Array<string>;
}
export interface SFacilitiesKeys {
	sorteddata: SFacKeys;
}
export interface SFacKeys {
		sortedPremKeys: Array<string>;
		sortedBasicKeys: Array<string>;
}
// i don't know what to call this... global state is getting too long. just holding data manipulation done clientside
export interface ClientDataState {
	dataSortType: DataSortingTypes;
	scrollPanePosY: number;
	selectedMarker: string;
	clickedCard: string;
	showMoreInfo: boolean;
	isSelectedMarkerChangeDone: boolean;
	selectedView: ScreenTypes;
	selectedFacilityID:string;
	isLoading:boolean;
	selectedSearchType:string;
	showAlert:boolean;
	
}
export enum ActionTypes {
	CHANGE_SCREEN = 'CHANGE_SCREEN',
	SELECT_MARKER = 'SELECT_MARKER',
	SELECT_CARD = 'SELECT_CARD',
	SELECT_FACILITY_ID = 'SELECT_FACILITY_ID',
	SELECT_SEARCHTYPE = 'SELECT_SEARCHTYPE',
	GET_SCROLL_YPOS = 'GET_SCROLL_YPOS',
	CHANGE_PREMPOPOVER_VISIBILITY = 'CHANGE_PREMPOPOVER_VISIBILITY',
	MARKER_SELECT_STATUS = 'MARKER_SELECT_STATUS',
	SORT_DATA = 'SORT_DATA',
	FILTER_DATA = 'FILTER_DATA',
	UPDATE_PREMIUM_LOCATIONS = 'UPDATE_PREMIUM_LOCATIONS',
	CHANGE_ZOOM_LEVEL = 'CHANGE_ZOOM_LEVEL',
	CHANGE_ZOOM_TYPE = 'CHANGE_ZOOM_TYPE',
	CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS',
	SHOW_ALERT = 'SHOW_ALERT'
}
export enum PrefActionTypes {
	APP_TITLE = 'APP_TITLE',
	SET_DEFAULT_ZOOM_TYPE = 'SET_DEFAULT_ZOOM_TYPE',
	SET_DEFAULT_ZOOM_LEVEL = 'SET_ZOOM_LEVEL',
	SET_DEFAULT_SORT_TYPE = 'SET_DEFAULT_SORT_TYPE'
}

export enum SearchBarActionTypes {
	CHANGE_SEARCHFIELDS = 'CHANGE_SEARCHFIELDS',
	VERIFY_FIELDS = 'VERIFY_FIELDS',
	GET_SERVER_FORM_DATA = 'GET_SERVER_FORM_DATA',
	GET_DATA = 'GET_DATA',
	GET_INITIAL_DATA = 'GET_INITIAL_DATA'
}
export enum DataActionTypes {
	DATA_RECEIVED = 'DATA_RECEIVED',
	DATA_ERROR = 'DATA_ERROR',
	NORMALIZE_DATA = 'NORMALIZE_DATA',
	GET_SORTED_DATA = 'GET_SORTED_DATA'
}

export enum DataRequestTypes {
	DATA_REQUESTED = 'DATA_REQUESTED',
	DATA_NOT_REQUESTED = 'DATA_NOT_REQUESTED'
}
export enum DataSortingTypes {
	NONE = 'NONE',
	PREMIUM_FIRST = 'PREMIUM_FIRST'
}
export enum MapZoomTypes {
	NONE = 'NONE',
	AUTO = 'AUTO'
}
export enum ScreenTypes {
	SPLASH_SCREEN = 'SPLASHSCREEN',
	MAP_SCREEN = 'MAPSCREEN'
}
export type SearchBarActions = ActionType<
	| typeof actions.updateSearchFields
	| typeof actions.getFormPresetsFrmServer
	| typeof actions.getData
	| typeof actions.getInitialData
	| typeof actions.verifyFields
>;

export type DataActions = ActionType<
	| typeof actions.dataReceived
	| typeof actions.dataError
	| typeof actions.normalizeData
	| typeof actions.getSortedData
>;

export type DefaultActions = ActionType<
	| typeof actions.setDefaultZoomType
	| typeof actions.setDefaultZoomLevel
	| typeof actions.setDefaultDataSortType
	| typeof actions.setAppTitle
>;

export type NavActions = ActionType<
	| typeof actions.changeView
	| typeof actions.selectMarker
	| typeof actions.selectCard
	| typeof actions.selectFacilityID
	| typeof actions.selectSearchType
	| typeof actions.updateScrollYPos
	| typeof actions.showHidePopover
	| typeof actions.changemarkerselectionstatus
	| typeof actions.setDataSortType
	| typeof actions.updatePremiumLocations
	| typeof actions.changeZoomType
	| typeof actions.changeZoomLevel
	| typeof actions.changeLoadingStatus
	| typeof actions.showAlert
>;
