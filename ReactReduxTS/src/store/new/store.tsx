import { createStore, combineReducers } from 'redux';
import {
	clientStateReducer,
	dataReducer,
	searchbarReducer,
	globalStateReducer,
	safeDataReducer,
	sortDataReducer
} from 'store/new/reducer';
import {
	GlobalState,
	DataState,
	SearchBarState,
	ClientDataState,
	FacilitiesKeys,
	SFacilitiesKeys
} from 'store/new/types';

export interface RootState {
	normalData: FacilitiesKeys;
	sortedData: SFacilitiesKeys;
	appState: ClientDataState;
	data: DataState;
	searchBar: SearchBarState;
	appPrefs: GlobalState;
}
const rootReducer = combineReducers({
	normalData: safeDataReducer,
	sortedData:sortDataReducer,
	appState: clientStateReducer,
	data: dataReducer,
	searchBar: searchbarReducer,
	appPrefs: globalStateReducer
});
// <RootState, any, any, any>
const store = createStore(rootReducer);

export default store;
