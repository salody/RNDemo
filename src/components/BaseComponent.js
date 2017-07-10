/**
 * 功能描述: 父类Component,所有的组件都继承于这个组件
 * 其中定义所有子组件通用的方法
 * 2017/7/7
 * 作者：liuguanbang
 */

import React, { Component } from 'react';

export default class BaseComponent extends Component {

	// react-navigation中对当前组件nav属性的配置
	static navigationOptions = {
		header: null
	};

}
