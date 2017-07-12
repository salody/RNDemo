/**
 * 功能描述: 带有placeholder占位图片的Image
 * 2017/7/10
 * 作者：liuguanbang
 */

import React, { Component, PropTypes } from 'react';
import { 
  Animated,
  Image,
  View,
} from 'react-native';

export default class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderOpacity: new Animated.Value(0)
    }
  }

  static propTypes = {
    source: Image.propTypes.source.isRequired,
    placeholder: Image.propTypes.source,
	  style: Image.propTypes.style,
	  resizeMode: PropTypes.string,
	  resizeMethod: PropTypes.string
  };

  onLoad() {
    Animated.timing(
      this.state.placeholderOpacity, {
        toValue: 0,
        duration: 250
      }
    ).start()
  }

  onPlaceholderLoad() {
    Animated.timing(
      this.state.placeholderOpacity, {
        toValue: 1,
        duration: 250
      }
    ).start()
  }

  render() {
    return(
      <View
        width={this.props.style.width}
        height={this.props.style.height}
        backgroundColor='#fff'
      >
        <Animated.Image
          resizeMode={this.props.resizeMode || 'cover'}
          resizeMethod={this.props.resizeMethod || 'resize'}
          style={[
            {
              position: 'absolute',
              zIndex: 10
            },
            this.props.style
            ]}
          source={this.props.source}
          onLoad={e => this.onLoad(e)}
        />
        <Animated.Image
          resizeMode={this.props.resizeMode || 'cover'}
          resizeMethod={this.props.resizeMethod || 'resize'}
          style={[
            {opacity: this.state.placeholderOpacity},
            this.props.style
            ]}
          source={this.props.placeholder || require('../../res/images/placeholder.png')}
          onLoad={e => this.onPlaceholderLoad(e)}
        />
      </View>

    );
  }
}
