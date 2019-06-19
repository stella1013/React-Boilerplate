import {
	GlobalState,
	NavActions,
	DataState,
	SearchBarState,
	DataActions,
	ActionTypes,
	ScreenTypes,
	DataActionTypes,
	SearchBarActions,
	SearchBarActionTypes,
	DataRequestTypes,
	DataSortingTypes,
	ClientDataState,
	DefaultActions,
	PrefActionTypes,
	FacilitiesKeys,
	SFacilitiesKeys
} from './types';
const initNormalState: FacilitiesKeys = {
	normalizeddata: {
		facilities: {},
		facilityIDs: [],
		premiumContent: []
	}
};
const initSortedState: SFacilitiesKeys = {
	sorteddata: {
		sortedPremKeys: [],
		sortedBasicKeys: []
	}
};
const initState: GlobalState = {
	appTitle: 'Healthcare Providers and Services',
	defaultZip: '',
	defaultZoomType: '',
	zoom: 13,
	defaultSortType: DataSortingTypes.PREMIUM_FIRST
};
const initClientDataState: ClientDataState = {
	selectedView: ScreenTypes.SPLASH_SCREEN,
	dataSortType: DataSortingTypes.PREMIUM_FIRST,
	scrollPanePosY: 0,
	selectedMarker: '0',
	clickedCard: '',
	showMoreInfo: false,
	isSelectedMarkerChangeDone: true,
	selectedFacilityID: '',
	isLoading: false,
	selectedSearchType:'',
	showAlert:false
};
const initSearchBarState: SearchBarState = {
	dataRequested: DataRequestTypes.DATA_NOT_REQUESTED,
	isReady: false,
	validSearch:false,
	formValues: {
		searchTypeValue: {
			elementType: 'select',
			elementSize: 'col-1-of-2',
			elementConfig: {
				options: [{ value: '0', displayValue: 'Search For...' }]
			},
			postLabel: '',
			selectedValue: { value: '0', displayValue: 'Search For...' }
		},
		zipCodeValue: {
			elementType: 'input',
			elementSize: 'col-1-of-4',
			elementConfig: {
				type: 'text',
				placeholder: 'Enter Zip Code'
			},
			selectedValue: { value: '0', displayValue: '0' }
		},
		radiusValue: {
			elementType: 'select',
			elementSize: 'col-1-of-8',
			elementConfig: {
				options: [
					{ value: '0', displayValue: '0' },
					{ value: '5', displayValue: '5' },
					{ value: '10', displayValue: '10' },
					{ value: '25', displayValue: '25' },
					{ value: '50', displayValue: '50' }
				]
			},
			postLabel: 'mi',
			selectedValue: { value: '0', displayValue: '0' }
		}
	}
};
export function globalStateReducer(
	state: GlobalState = initState,
	action: DefaultActions,
	search: SearchBarState = initSearchBarState
): GlobalState {
	switch (action.type) {
		case PrefActionTypes.APP_TITLE:
			if (state.appTitle !== action.payload) {
				return { ...state, appTitle: action.payload };
			}
			break;
		case PrefActionTypes.SET_DEFAULT_ZOOM_TYPE:
			if (state.defaultZoomType !== action.payload) {
				return { ...state, defaultZoomType: action.payload };
			}
			break;
		case PrefActionTypes.SET_DEFAULT_SORT_TYPE:
			if (state.defaultSortType !== action.payload) {
				return { ...state, defaultSortType: action.payload };
			}
			break;
		case PrefActionTypes.SET_DEFAULT_ZOOM_LEVEL:
			if (state.zoom !== action.payload) {
				return { ...state, zoom: action.payload };
			}
			break;
		default:
			return state;
	}
	// return state unchanged
	return state;
}
export function clientStateReducer(
	state: ClientDataState = initClientDataState,
	action: NavActions,
	search: SearchBarState = initSearchBarState
): ClientDataState {
	// let unTouchedTitle = initState.appTitle;
	// let newState = { ...state };
	let newScreen: ScreenTypes | undefined = undefined; // = state.selectedView;
	let newSort: DataSortingTypes | undefined = undefined;
	switch (action.type) {
		case ActionTypes.SELECT_MARKER:
			if (state.selectedMarker !== action.payload) {
				return { ...state, selectedMarker: action.payload };
			}
			return state;
			break;
		case ActionTypes.SELECT_CARD:
			if (state.clickedCard !== action.payload) {
				return { ...state, clickedCard: action.payload };
			}
			return state;
			break;
		case ActionTypes.SELECT_SEARCHTYPE:
			if (state.selectedSearchType !== action.payload) {
				return { ...state, selectedSearchType: action.payload };
			}
			return state;
			break;
		case ActionTypes.SELECT_FACILITY_ID:
			if (state.selectedFacilityID !== action.payload) {
				return { ...state, selectedFacilityID: action.payload };
			}
			return state;
			break;
		case ActionTypes.GET_SCROLL_YPOS:
			if (state.scrollPanePosY !== action.payload) {
				return { ...state, scrollPanePosY: action.payload };
			}
			return state;
			break;
		case ActionTypes.CHANGE_LOADING_STATUS:
			if (state.isLoading !== action.payload) {
				return { ...state, isLoading: action.payload };
			}
			return state;
			break;
		case ActionTypes.CHANGE_PREMPOPOVER_VISIBILITY:
			if (state.showMoreInfo !== action.payload) {
				return { ...state, showMoreInfo: action.payload };
			}
			return state;
			break;
		case ActionTypes.SHOW_ALERT:
			if (state.showAlert !== action.payload) {
				return { ...state, showAlert: action.payload };
			}
			return state;
			break;
		case ActionTypes.MARKER_SELECT_STATUS:
			if (state.isSelectedMarkerChangeDone !== action.payload) {
				return { ...state, isSelectedMarkerChangeDone: action.payload };
			}
			return state;
			break;
		case ActionTypes.CHANGE_SCREEN:
			if (action.payload) {
				if (state.selectedView !== action.payload) {
					newScreen = action.payload;
				}
			} else if (state.selectedView === ScreenTypes.SPLASH_SCREEN) {
				newScreen = ScreenTypes.MAP_SCREEN;
			} else if (state.selectedView === ScreenTypes.MAP_SCREEN) {
				newScreen = ScreenTypes.SPLASH_SCREEN;
			}
			break;
		case ActionTypes.SORT_DATA:
			if (action.payload) {
				if (state.dataSortType !== action.payload) {
					newSort = action.payload;
				}
			}
			break;
		default:
			return state;
	}
	// set new screen
	if (newScreen) {
		return { ...state, selectedView: newScreen };
	}
	// set new sort
	if (newSort) {
		return { ...state, dataSortType: newSort };
	}
	// return state unchanged
	return state;
}
export function searchbarReducer(
	state: SearchBarState = initSearchBarState,
	action: SearchBarActions
): SearchBarState {
	switch (action.type) {
		case SearchBarActionTypes.GET_INITIAL_DATA:
			if (
				state.formValues.searchTypeValue.selectedValue.value !== '0' ||
				null
			) {
				return {
					...state,
					isReady: true
				};
			}
			break;
		case SearchBarActionTypes.GET_DATA:
			if (state.dataRequested !== action.payload) {
				return {
					...state,
					dataRequested: action.payload
				};
			}
			break;
		case SearchBarActionTypes.VERIFY_FIELDS:
			if (state.validSearch !== action.payload) {
				return {
					...state,
					validSearch: action.payload
				};
			}
			break;
		case SearchBarActionTypes.GET_SERVER_FORM_DATA:
			return {
				...state,
				isReady: true,
				formValues: {
					...state.formValues,
					searchTypeValue: {
						...state.formValues.searchTypeValue,
						elementConfig: {
							...state.formValues.searchTypeValue.elementConfig,
							options: action.payload
						}
					}
				}
			};
			break;
		case SearchBarActionTypes.CHANGE_SEARCHFIELDS:
			return {
				...state,
				formValues: {
					...state.formValues,
					[action.payload.id]: {
						...state.formValues[action.payload.id],
						selectedValue: {
							displayValue: action.payload.displayValue,
							value: action.payload.value
						}
					}
				}
			};
			break;
		default:
			return state;
	}
	return state;
}
// this reducer prop needs to be moved to backend so ids are on data returned.
export function safeDataReducer(
	state: FacilitiesKeys = initNormalState,
	action: DataActions
): FacilitiesKeys {
	switch (action.type) {
		case DataActionTypes.NORMALIZE_DATA:
			console.log('hello normal data', action.payload);

			return { ...state, normalizeddata: action.payload };
			break;
		default:
			return state;
	}
	return state;
}
export function sortDataReducer(
	state: SFacilitiesKeys = initSortedState,
	action: DataActions
): SFacilitiesKeys {
	
	switch (action.type) {
		case DataActionTypes.GET_SORTED_DATA:
			return { ...state, sorteddata: action.payload };
			break;
		default:
			return state;
	}
	return state;
}
export function dataReducer(
	state: DataState = {},
	action: DataActions
): DataState {
	console.log(action);
	console.log(state);
	switch (action.type) {
		case DataActionTypes.DATA_RECEIVED:
			return {
				...state,
				data: action.payload,
				error: undefined
			};
			break;
		case DataActionTypes.DATA_ERROR:
			return {
				...state,
				data: undefined,
				error: action.payload
			};
			break;
		default:
			return state;
	}
	return state;
}
