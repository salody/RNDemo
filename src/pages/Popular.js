/**
 * 功能描述: Popular页面
 * 2017/7/7
 * 作者：liuguanbang
 */

import React from 'react';
import {
	View,
	FlatList,
	StyleSheet
} from 'react-native';
import BaseComponent from '../components/BaseComponent';
import NavigationBar from '../components/NavigationBar';
import RepoCard from '../components/RepoCard';
import { api } from '../api'

const data = api.items;

export default class Popular extends BaseComponent {
	_keyExtractor = (item, index) => item.id;

	renderItem({item}) {
		return (
			<RepoCard
				item={item}
			  key={item.id}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					title="Popular"
				/>
				<FlatList
					data = {data}
				  renderItem={this.renderItem}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
	},
});