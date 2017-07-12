import React, { Component } from 'react';
import AppNavigator from './navigators/AppNavigator';

import httpRequest from './utils/httpRequest';
import api from './config/api'
import axios from 'axios';
//import { api } from './api';
import { normalize, schema } from 'normalizr';

export default class rnDemo extends Component {
	componentDidMount() {
		httpRequest.get(api.baseURL, {
			params: {
				q: 'stars:>1',
				sort: 'stars'
			}
		})
			.then((res) => {
				console.log(res)
			})
		/*const rawData = api.items;
		const repositorySchema = new schema.Entity('repositories');
		const repositoryListSchema = new schema.Array(repositorySchema);
		const normalizedData = normalize(rawData, repositoryListSchema);
		console.log(normalizedData);*/
	}

	render() {
		return (
			<AppNavigator />
		);
	}
}
