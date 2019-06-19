import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/new/store';
import * as actions from 'store/new/actions';
import {
	ScreenTypes,
	DataRequestTypes
} from 'store/new/types';


type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

class App extends React.Component<ReduxType> {

render() {

		return ;
	}
}
const mapStateToProps = ({ data }: RootState) => {
	return {
		data: data.data!
	};
};
const mapDispatchToProps = (
	dispatch: any
) => {
	return {
		
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
