/**
 * 功能描述: Popular页面
 * 2017/7/7
 * 作者：liuguanbang
 */

import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	StyleSheet
} from 'react-native';
import BaseComponent from '../components/BaseComponent';
import NavigationBar from '../components/NavigationBar';
import { api } from '../api'

const data = api.items;

export default class Popular extends BaseComponent {
	constructor() {
		super();

	}

	renderItem({item}) {
		return (
			<View>
				<View style={styles.list}>
					<View style={{flexDirection: 'row'}}>
						<Image source={{uri: item.owner.avatar_url}} style={styles.image}/>
						<View>
							<Text style={[styles.desc, {marginLeft: 10}]}>{item.owner.login}</Text>
							<Text style={[styles.footerDesc, {marginLeft: 10}]}>updated: {item.updated_at.slice(0,10)}</Text>
						</View>
					</View>
					<TouchableOpacity>
						<Text style={styles.title}>{item.name}</Text>
						<Text style={styles.desc}>{item.description}</Text>
					</TouchableOpacity>
					<View style={styles.footer}>
						<Text style={styles.footerDesc}>Language: {item.language === null ? 'no specific' : item.language}</Text>
						<Text style={styles.footerDesc}>Stars: {item.watchers}</Text>
						<Image
							source={require('../../res/images/ic_unstar_transparent.png')}
							style={styles.star}
						/>
					</View>
				</View>
			</View>
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
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	list: {
		marginBottom: 10,
		padding: 10,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ddd'
	},
	title: {
		marginVertical: 5,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000'
	},
	desc: {
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.8)',
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 5
	},
	footerDesc: {
		fontSize: 12,
		color: 'rgba(0, 0, 0, 0.7)',
	},
	image: {
		width: 36,
		height: 36,
	},
	star: {
		width: 20,
		height: 20,
		tintColor: '#ee735c'
	}
});