import { createSelector } from 'reselect';

function getClientStateSelector(state: any) {
	return state.clientState;
}
const getClientStateSelectorMemo = createSelector(
	getClientStateSelector,
	(data: any) => data
);

export default {
	getClientStateSelectorMemo
};
