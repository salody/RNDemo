/**
 * 功能描述:
 * 2017/7/7
 * 作者：liuguanbang
 */

import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import BaseComponent from '../components/BaseComponent';
import NavigationBar from '../components/NavigationBar';

export default class My extends BaseComponent {
	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					title="Popular"
				/>
				<Text>MyScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});