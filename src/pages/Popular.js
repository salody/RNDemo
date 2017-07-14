/**
 * 功能描述: Popular页面
 * 2017/7/7
 * 作者：liuguanbang
 */

import React from 'react';
import {
	View,
	FlatList,
	Animated,
	ScrollView,
	PanResponder,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Dimensions,
	StyleSheet
} from 'react-native';
import BaseComponent from '../components/BaseComponent';
import NavigationBar from '../components/NavigationBar';
import RepoCard from '../components/RepoCard';
import GlobalStyles from '../common/GlobalStyles'
import {api} from '../api';
import * as Animatable from 'react-native-animatable';
//NavigationBar = Animatable.createAnimatableComponent(NavigationBar);
const data = api.items;


export default class Popular extends BaseComponent {
	_keyExtractor = (item, index) => item.id;

	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this)
	}


	handleScroll(event: Object) {
		event.persist()
		this.event = event;

		// 当前触发的y
		this.yNow = event.nativeEvent.contentOffset.y;
		this.timer = setTimeout(() => {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.yPre = event.nativeEvent.contentOffset.y;

			// 向上滑动
			if(this.yNow - this.yPre > 50) {
				this.refs.container.transitionTo({
					transform: [{translateY: -70}],
				}, 100, 'linear');
			} else if (this.yNow - this.yPre < -50) {
				this.refs.container.transitionTo({
					transform: [{translateY: -3}],
				}, 100, 'linear');
			}
		}, 200)
	}


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

			<Animatable.View
				ref="container"
				style={styles.container}
				transition='translateY'
			>
				<NavigationBar
					title="Popular"
					style={[styles.navBar,]}
				/>
				<FlatList
					data={data}
					renderItem={this.renderItem}
					keyExtractor={this._keyExtractor}
					style={[styles.listContainer,]}
					showsVerticalScrollIndicator={false}
					onScroll={this.handleScroll}
					scrollEventThrottle={16}
				/>


			</Animatable.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: GlobalStyles.window_width,
		height: GlobalStyles.window_height,
		backgroundColor: '#eee',
		position: 'relative',
		transform: [{translateY: 0}]
	},
	listContainer: {
		padding: 8,
		flex: 1,
	},

});