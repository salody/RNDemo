/**
 * 功能描述:
 * 2017/7/7
 * 作者：liuguanbang
 */

import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon'
import PopularPage from '../pages/Popular';
import FavoritePage from '../pages/Favorite';
import TrendingPage from '../pages/Trending';
import MyPage from '../pages/My';




// 定义TabNavigator
const TabRouteConfigs = {
	PopularTab: {
		screen: PopularPage,
		navigationOptions: {
			tabBarLabel: '流行',
			tabBarIcon: ({ tintColor, focused }) => (<TabBarIcon
				focused={focused}
				tintColor={tintColor}
				focusedName="ios-flame"
				unfocusedName="ios-flame-outline"
			/>),
		}
	},
	TrendingTab: {
		screen: TrendingPage,
		navigationOptions: {
			tabBarLabel: '趋势',
			tabBarIcon: ({ tintColor, focused }) => (<TabBarIcon
				focused={focused}
				tintColor={tintColor}
				focusedName="ios-glasses"
				unfocusedName="ios-glasses-outline"
			/>),
		}
	},
	FavoriteTab: {
		screen: FavoritePage,
		navigationOptions: {
			tabBarLabel: '收藏',
			tabBarIcon: ({ tintColor, focused }) => (<TabBarIcon
				focused={focused}
				tintColor={tintColor}
				focusedName="ios-happy"
				unfocusedName="ios-happy-outline"
			/>),
		}
	},
	MyTab: {
		screen: MyPage,
		navigationOptions: {
			tabBarLabel: '我的',
			tabBarIcon: ({ tintColor, focused }) => (<TabBarIcon
				focused={focused}
				tintColor={tintColor}
				focusedName="ios-ionitron"
				unfocusedName="ios-ionitron-outline"
			/>),
		}
	}
};

const TabNavigatorConfig = {
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	animationEnabled: false,
	// backBehavior: 'none', 返回键回退到首页还是直接退出
	tabBarOptions: {
		activeTintColor: '#fff',
		inactiveTintColor: '#9c9c9c',
		showLabel: true,
		style: {
			backgroundColor: '#212121'
		}
	}
};

const HomeTabNav = TabNavigator(TabRouteConfigs, TabNavigatorConfig);


// 定义StackNavigator
const RouteConfigs = {
	HomeScreen: {
		screen: HomeTabNav,
	},
	/*MapPost: {
		screen: MapPostScreen,
		navigationOptions: {
			title: 'Notification Settings',
		},
	},
	*/
};

const StackNavigatorConfig = {
	initialRouteName: 'HomeScreen',
	//headerMode: 'none'
};

const AppNavigator = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppNavigator;