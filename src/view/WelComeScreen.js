import { ActivityIndicator, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FONT_SIZE } from '../../contrain/font_size'
import { COLOR } from '../../contrain/color'

const WelComeScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 3000)
    }, [])
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <ImageBackground
                style={{ width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}
                source={
                    {
                        uri: 'https://png.pngtree.com/png-clipart/20191123/original/pngtree-online-cinema-banner-vector-realistic-film-industry-theme-box-of-popcorn-png-image_5194535.jpg'
                    }
                }
            >
                <View />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 'bold', color: COLOR.black }}>Bee Movie</Text>
                    <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 'bold', color: COLOR.black }}>Lê Mạnh Quỳnh - Ph32353</Text>
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 'bold', color: COLOR.black }}>CRO102-MD18305</Text>
                </View>
                <View>
                    <ActivityIndicator color={COLOR.white} size={'large'} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default WelComeScreen

const styles = StyleSheet.create({})