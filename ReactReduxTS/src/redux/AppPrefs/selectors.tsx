import { createSelector } from 'reselect';

function getAppPrefsSelector(state: any) {
	return state.appPrefs;
}
const getAppPrefsSelectorMemo = createSelector(
	getAppPrefsSelector,
	(data: any) => data
);

export default {
	getAppPrefsSelectorMemo
};
