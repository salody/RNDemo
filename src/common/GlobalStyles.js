/**
 * 功能描述: 全局样式
 * 2017/7/7
 * 作者：liuguanbang
 */

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const GlobalStyles = {
	window_height: height,
	window_width: width,
	nav_bar_height_ios: 44,
	nav_bar_height_android: 50,
};

export default GlobalStyles;