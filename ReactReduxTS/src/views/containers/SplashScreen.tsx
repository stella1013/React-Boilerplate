import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux/store';

class SplashScreen extends React.Component<ReduxType> {
}

type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: AppState) => {
	return {
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SplashScreen);
