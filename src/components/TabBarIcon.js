/**
 * 功能描述: TabBar上的Icon
 * 2017/7/7
 * 作者：liuguanbang
 */

import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBarIcon = (props) =>
	<Icon
		name={props.focused ? props.focusedName : props.unfocusedName}
	  size={24}
		style={{color: props.tintColor}}
	/>;

TabBarIcon.propTypes = {
	focused: PropTypes.bool.isRequired,
	focusedName: PropTypes.string.isRequired,
	unfocusedName: PropTypes.string.isRequired,
	tintColor: PropTypes.string.isRequired
};

export default TabBarIcon

