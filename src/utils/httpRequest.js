/**
 * 功能描述:
 * 2017/7/12
 * 作者：liuguanbang
 */
/*
* The available instance methods are listed below. The specified config will be merged with the instance config.

 axios#request(config)

 axios#get(url[, config])

 axios#delete(url[, config])

 axios#head(url[, config])

 axios#options(url[, config])

 axios#post(url[, data[, config]])

 axios#put(url[, data[, config]])

 axios#patch(url[, data[, config]])
* */

import axios from 'axios';

const config = {
	// `baseURL` will be prepended to `url` unless `url` is absolute.
	// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
	// to methods of that instance.
	//baseURL: 'https://api.github.com/search/repositories',

	// `headers` are custom headers to be sent
	headers: {'X-Requested-With': 'XMLHttpRequest'},

	// `timeout` specifies the number of milliseconds before the request times out.
	// If the request takes longer than `timeout`, the request will be aborted.
	//timeout: 1000,

	// `responseType` indicates the type of data that the server will respond with
	// options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
	responseType: 'json', // default

	// `validateStatus` defines whether to resolve or reject the promise for a given
	// HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
	// or `undefined`), the promise will be resolved; otherwise, the promise will be
	// rejected.
	validateStatus: function (status) {
		return status >= 200 && status < 300; // default
	},

	// `onUploadProgress` allows handling of progress events for uploads
	onUploadProgress: function (progressEvent) {
		// Do whatever you want with the native progress event
		let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
		console.log(percentCompleted);
		// do whatever you like with the percentage complete
		// maybe dispatch an action that will update a progress bar or something
	},

	// `onDownloadProgress` allows handling of progress events for downloads
	onDownloadProgress: function (progressEvent) {
		let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
		if (percentCompleted === 100) {
			console.log('加载完毕')
		}
		// do whatever you like with the percentage complete
		// maybe dispatch an action that will update a progress bar or something
	},
};

const instance = axios.create(config);

const httpRequest = {
	get(url, config) {
		return instance.get(url, config)
	},
	post(url, data, config) {
		return instance.post(url, data, config)
	}
};

export default httpRequest;