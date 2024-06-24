import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { COLOR } from '../../contrain/color';

const Slider = () => {
    const [images, setImage] = useState([
        "https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg",
        "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    ])
    return (
        <View style={{ width: '100%'}}>
            <SliderBox
                images={images}
                sliderBoxHeight={220}
                dotColor={COLOR.blue}
                inactiveDotColor="#90A4AE"
                resizeMethod={'resize'}
                resizeMode={'cover'}
                autoplay
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({})