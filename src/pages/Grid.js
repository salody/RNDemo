/**
 * 功能描述:
 * 2017/7/14
 * 作者：liuguanbang
 */

/**
 * 功能描述:
 * 2017/7/7
 * 作者：liuguanbang
 */

import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';
import BaseComponent from '../components/BaseComponent'
import NavigationBar from '../components/NavigationBar';
import GlobalStyle from '../common/GlobalStyles'

export default class Grid extends BaseComponent {
	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					title="Popular"
					style={[styles.navBar,]}
				/>
				<View style={{ paddingTop: 4, backgroundColor: '#f8f8f8',}}>
					<View style={{height: 20, padding: 4, marginBottom: 8,}}>
						<Text
							style={{ color: '#444', fontSize: 14}}
						>年终会议标题</Text>
					</View>
					<View style={[styles.row,]}>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
					</View>
					<View style={[styles.row,]}>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
					</View>
					<View style={[styles.row,]}>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
						<View style={styles.column}>
							<Image
								source={require('../../images/App/ConferenceAgenda.png')}
								style={styles.columnImg}
							/>
							<Text
								style={styles.columnText}
							>会议议程</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f8f8f8',
	},
	row: {
		height: GlobalStyle.window_width / 3,
		width: GlobalStyle.window_width,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 4,
		paddingBottom: 4,
		paddingRight: 4
	},
	column: {
		width: (GlobalStyle.window_width - 16) / 3,
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'gray',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 0.6,
		shadowRadius: 1,
		elevation: 2,
	},
	columnText: {
		color: '#444',
		marginTop: 10,
		fontSize: 12
	},
	columnImg: {
		width: 21,
		height: 21
	}
});