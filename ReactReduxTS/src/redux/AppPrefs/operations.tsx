import actions from './actions';

// This is a link to an action defined in actions.js.
const setAppTitle = actions.setAppTitleAction;
const setDefaultZoomLevel = actions.setDefaultZoomLevelAction;
const setDefaultDataSortType = actions.setDefaultDataSortTypeAction;
const setDefaultZoomType = actions.setDefaultZoomTypeAction;

// const getData = actions.getData;

export default {
	setAppTitle,
	setDefaultZoomLevel,
	setDefaultDataSortType,
	setDefaultZoomType
};
