import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

const store = {
	app: 'state'
};

const app = () => (
	<Provider store={store}>
		<App />
	</Provider>
);
	
export default app;