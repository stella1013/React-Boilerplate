import * as React from 'react';
import { connect } from 'react-redux';
import * as Loadable from 'react-loadable';
import { AppState } from 'redux/store';
import { 
	clientStateSelectors// , 
	// clientStateOperations 
} from 'redux/ClientState';
import Loading from 'views/components/UI/Loading';
// import { faEnvelope, faKey, faCode, faPlayCircle, faImages } from '@fortawesome/free-solid-svg-icons';

const LoadableSplashScreenComponent = Loadable({
	loader: () => import('./SplashScreen'),
	loading: Loading
});
const LoadableMapScreenComponent = Loadable({
	loader: () => import('./AnotherPage'),
	loading: Loading
});

class App extends React.Component<ReduxType> {
	componentDidMount() {
		// this.props.fetchData();
	}

	render() {
		let currentView = <LoadableSplashScreenComponent />;
		if (this.props.clientState.selectedView === 'SPLASHSCREEN') {
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
		clientState: clientStateSelectors.getClientStateSelectorMemo(state)
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		/* changeView: (view?: ScreenTypes | undefined) =>
			dispatch(clientStateOperations.changeView(view))*/
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
