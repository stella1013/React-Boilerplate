import * as React from 'react';
import { connect } from 'react-redux';
import * as Loadable from 'react-loadable';
import { AppState } from '../../store/store';
import Loading from 'views/components/UI/Loading';
import { dataOperations } from 'redux/Data';
import { clientStateSelectors } from 'redux/ClientState';

/* 
TODO:
-Add form validation
-unloading components when searching while mapscreen is up causes error
*/

const LoadableSplashScreenComponent = Loadable({
	loader: () => import('./SplashScreen'),
	loading: Loading
});
const LoadableMapScreenComponent = Loadable({
	loader: () => import('./MapScreen'),
	loading: Loading
});

class App extends React.Component<ReduxType> {
	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		let currentView = <LoadableSplashScreenComponent />;
		if (this.props.appState.selectedView === 'SPLASHSCREEN') {
			currentView = <LoadableSplashScreenComponent />;
		} else {
			currentView = <LoadableMapScreenComponent />;
		}
		return (
			<div className="App">
				<div className="grid">
					<div className="row">{currentView}</div>
				</div>
			</div>
		);
	}
}
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: AppState) => {
	return {
		// data: dataSelectors.getDataSelector(state),
		// newData: dataSelectors.normalizedDataSelector(state),
		// appPrefs: appPrefsSelectors.getAppPrefsSelectorMemo(state),
		appState: clientStateSelectors.getClientStateSelectorMemo(state)
		// sBar: searchBarSelectors.searchBarStateSelector(state),
		// isReady: searchBarSelectors.isReadySelector(state),
		// categories: state.categoryData.searchformdata
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: () => dispatch(dataOperations.fetchData())
		/* changeLoadingStatus: (isLoading: boolean) =>
			dispatch(clientStateOperations.changeLoadingStatus(isLoading)),*/
		// getInitialData: () => dispatch(searchBarOperations.getInitialData()),
		/* getFormPresetsFrmServer: (data: []) =>
			dispatch(searchBarOperations.getFormPresetsFrmServer(data)),*/
		/* getData: (request: DataRequestTypes, callback: any) =>
			dispatch(searchBarOperations.getData(request, callback)),*/
		/* updateSearchFields: (selectedValue: {
			displayValue: string;
			value: string;
			id: string;
		}) => dispatch(searchBarOperations.updateSearchFields(selectedValue)),*/
		/* changeView: (view?: ScreenTypes | undefined) =>
			dispatch(clientStateOperations.changeView(view))*/
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
