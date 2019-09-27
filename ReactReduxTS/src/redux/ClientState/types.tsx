export const APP_TITLE = 'APP_TITLE';

interface setAppTitleAction {
	type: typeof APP_TITLE;
	payload: string;
}

export type ClientStateActionTypes =
	| setAppTitleAction;
