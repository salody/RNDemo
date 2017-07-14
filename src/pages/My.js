import React, {Component} from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	Animated,
	PanResponder,
	Dimensions,
	Easing
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
export default class My extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollOffset: 0
		};
	}

	render() {
		let opacity;
		let maxDistance = 120;
		if (this.state.scrollOffset <= 0) {
			opacity = 0;
		} else if (this.state.scrollOffset <= maxDistance) {
			opacity = this.state.scrollOffset / maxDistance;
		} else {
			opacity = 1;
		}
		return (
			<View>
				<View style={{
					position: 'absolute',
					width: screenWidth,
					height: 64,
					top: 0,
					zIndex: 99,
					backgroundColor: 'rgba(108,193,224,' + opacity + ')'
				}}>
					<Text style={{
						fontSize: 20,
						position: 'absolute',
						top: 20,
						left: 30,
						color: '#fff'
					}}>搜索</Text>
					<Text style={{
						fontSize: 20,
						position: 'absolute',
						top: 20,
						left: 180,
						color: '#000',
						opacity: opacity
					}}>标题</Text>
				</View>
				<ScrollView
					onScroll={(event) => {
						this.setState({
							scrollOffset: event.nativeEvent.contentOffset.y
						});
						//console.log(event.nativeEvent.contentOffset.y);
						console.log(event.nativeEvent);
					}}
					scrollEventThrottle={15}
				>
					<Image
						source={require('./img.jpg')}
						style={{width: screenWidth, height: 180}}
					/>
					<View
						style={{width: 100, height: 200, backgroundColor: 'red'}}
					/>
					<View
						style={{width: 100, height: 200, backgroundColor: 'red'}}
					/>
					<View
						style={{width: 100, height: 200, backgroundColor: 'red'}}
					/>
					<View
						style={{width: 100, height: 300, backgroundColor: 'red'}}
					/>
					<View
						style={{width: 100, height: 200, backgroundColor: 'red'}}
					/>
					<View
						style={{width: 100, height: 400, backgroundColor: 'red'}}
					/>

				</ScrollView>
			</View>

		);
	}
}