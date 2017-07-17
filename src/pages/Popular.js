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
import * as Animatable from 'react-native-animatable';
import {api} from '../api';
const data = api.items;


export default class Popular extends BaseComponent {
	_keyExtractor = (item, index) => item.id;

	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this)
	}


	handleScroll(event: Object) {
		// If you want to access the event properties in an asynchronous way,
		// you should call event.persist() on the event,
		// which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
		// 详情参考: https://facebook.github.io/react/docs/events.html
		event.persist();
		this.event = event;

		// 当前触发的y
		this.yNow = event.nativeEvent.contentOffset.y;
		this.timer = setTimeout(() => {
			if (this.timer) {
				clearTimeout(this.timer);
			}

			// 异步之前的y值
			this.yPre = event.nativeEvent.contentOffset.y;

			// 向上滑动
			if (this.yNow - this.yPre > 10) {
				this.navBar.transitionTo({
					opacity: 0,
				});
			} else if (this.yNow - this.yPre < -10) {   // 向下滑动
				this.navBar.transitionTo({
					opacity: 1,
				});
			}
		}, 30)
	}

	renderHeader() {
		return (
			<View
				style={{height: 50}}
			/>
		);
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

			<View
				style={styles.container}
			>
				<Animatable.View
					ref={(navBar) => this.navBar = navBar}
					style={styles.navBar}
				>
					<NavigationBar
						title="Popular"
					/>
				</Animatable.View>

				<FlatList
					data={data}
					renderItem={this.renderItem}
					keyExtractor={this._keyExtractor}
					style={styles.listContainer}
					showsVerticalScrollIndicator={false}
					onScroll={this.handleScroll}
					scrollEventThrottle={1}    // 值越小，触发的事件越多
					ListHeaderComponent={this.renderHeader}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
	listContainer: {
		padding: 8,
	},
	navBar: {
		opacity: 1,
		position: 'absolute',
		zIndex: 10
	}
});