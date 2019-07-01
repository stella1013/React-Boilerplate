import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/Reducers';
/*import {
	clientStateReducer,
	dataReducer,
	searchbarReducer,
	globalStateReducer,
	safeDataReducer,
	sortDataReducer
} from 'store/new/reducer';*//*
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
*/
// <RootState, any, any, any>
export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
