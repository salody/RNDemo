/**
 * 功能描述: 每一个Repo的Card组件
 * 2017/7/10
 * 作者：liuguanbang
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import ImageView from './ImageView';

export default class RepoCard extends Component {
	render() {
		const { item } = this.props;
		return (
			<View>
				<View style={styles.list}>
					<View style={{flexDirection: 'row'}}>
						<ImageView
							source={{uri: item.owner.avatar_url}}
							style={styles.image}
							resizeMode='cover'
							resizeMethod='resize'
						/>
						<View>
							<Text style={[styles.desc, {marginLeft: 10}]}>{item.owner.login}</Text>
							<Text style={[styles.footerDesc, {marginLeft: 10}]}>updated {item.updated_at.slice(0,10)}</Text>
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
}

const styles = StyleSheet.create({
	list: {
		marginBottom: 16,
		padding: 10,
		backgroundColor: '#fff',
		elevation: 2
	/*	borderWidth: 1,
		borderColor: '#ddd'*/
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