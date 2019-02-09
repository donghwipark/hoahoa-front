import React, {Component} from 'react'
import {Image, PixelRatio} from 'react-native'

export default class CircleImage extends Component {
  render() {
    const imageSize = PixelRatio.getPixelSizeForLayoutSize(50)
    const fbImage = 'https://s3.ap-northeast-2.amazonaws.com/hoa-hoa-project/donghwipark.png'
    return (
      <Image
        source={{uri:fbImage}}
        style={{width:imageSize, height:imageSize, borderRadius:imageSize / 2}}
      />
    )
  }
}