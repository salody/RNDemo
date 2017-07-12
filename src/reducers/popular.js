/**
 * 功能描述:
 * 2017/7/12
 * 作者：liuguanbang
 */

import { combineReducers } from 'redux';

const repository = (state = {}, action) => {
	switch (action.type) {
		case 'POPULAR_REPOSITORY_SUCCESS':
			return {
				...action.repositories
			};
		default:
			return state;
	}
};

const allIds = (state = [], action) => {
	switch (action.type) {
		case 'POPULAR_REPOSITORY_SUCCESS':
			return [
				...action.allIds
			];
		default:
			return state;
	}
};

const isLoading = (state = false, action) => {
	switch (action.type) {
		case 'POPULAR_REPOSITORY_REQ':
			return true;
		case 'POPULAR_REPOSITORY_SUCCESS':
			return false;
		default:
			return state;
	}
};

const favouriteStatus = (state = {}, action) => {
	switch (action.type) {
		case 'POPULAR_REPOSITORY_SUCCESS':
			action.allIds.map((id) => {
				state[id] = false;
			});
			return {
				...state
			};
		case 'TOGGLE_FAVOURITE':
			return {
				...state,
				[action.id]: !state[action.id]
			};
		default:
			return state;
	}
};

const popular = combineReducers({
	repository,
	allIds,
	isLoading,
	favouriteStatus
});

export default popular;