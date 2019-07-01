import { action } from 'typesafe-actions';
import {DataActionTypes} from './types';
import DataResponse from 'models/DataResponse';

export function dataReceived(data: DataResponse) {
	return action(DataActionTypes.DATA_RECEIVED, data);
}

export function dataError(error: Error) {
	return action(DataActionTypes.DATA_ERROR, error);
}
