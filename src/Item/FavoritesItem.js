import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR } from '../../contrain/color'
import { FONT_SIZE } from '../../contrain/font_size'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useTheme } from '../Themes/MyThemes';

const FavoritesItem = ({ item }) => {
    const url = "http://10.0.2.2:3000/authors"
    const [author, setAuthor] = useState({})
    const handleCallData = () => {
        fetch(`${url}/${item.author}`).then(res => res.json()).then((data) => {
            setAuthor(data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        handleCallData()
    }, [])
    const { theme } = useTheme()
    const UI = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff'
    }
    return (
        <SafeAreaView style={{
            width: '100%',
            height: 530,
            borderWidth: 1,
            borderColor: '#383A3E',
            backgroundColor: COLOR.black,
            borderRadius: 25,
            marginBottom: 20,
            overflow: 'hidden',
        }}>
            <ImageBackground style={{
                flex: 3,
                justifyContent: 'space-between',
                borderRadius: 25,
            }}
                source={{
                    uri: item.movie.image
                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 20, marginLeft: 20 }}>
                    <View style={{ width: 33, height: 33 }}>
                    </View>
                    <View style={{ width: 33, height: 33, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity><Icon name="heart" size={17} color={'#ff0000'} /></TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: 150,
                    backgroundColor: COLOR.transparent,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    padding: 15,
                    flexDirection: 'row'
                }}>
                    {/**Left */}
                    <View style={{ flex: 2, justifyContent: 'space-around' }}>
                        <View>
                            <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.white }}>
                            {item.movie.name.length > 20 ? `${item.movie.name.substring(0, 20)}...` : item.movie.name}
                            </Text>
                            <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: 400, color: COLOR.gray }}>
                                {author.name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16 }}>
                                ⭐
                            </Text>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, color: 'white', fontWeight: 600 }}>
                                5
                            </Text>
                            <Text style={{ color: '#AEAEAE', fontSize: FONT_SIZE.font_size_12 }}>
                                (4567)
                            </Text>
                        </View>
                    </View>
                    {/**Right */}
                    <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '40%', height: 55, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../img/removebg.png')}
                                    style={{ width: 25, height: 25 }}>
                                </Image>
                            </View>
                            <View style={{ width: '40%', height: 55, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={
                                        require('../img/romatoes.png')
                                    }
                                    style={{ width: 25, height: 25 }}>
                                </Image>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '100%', height: 45, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    resizeMode='contain'
                                    source={
                                        {
                                            uri: 'https://www.rottentomatoes.com/assets/pizza-pie/images/rtlogo.9b892cff3fd.png'
                                        }
                                    }
                                    style={{ width: 50, height: 50 }}>
                                </Image>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ flex: 1.2, justifyContent: 'space-evenly', flexDirection: 'column' }}>
                    <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_14, fontWeight: 600 }}>
                        Description
                    </Text>
                    <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_12, fontWeight: 400 }}>
                        {item.movie.describe.length > 250 ? `${item.movie.describe.substring(0, 250)}...` : item.movie.describe}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '27%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        color: COLOR.gray,
        fontSize: FONT_SIZE.font_size_12,
    }
})
export default FavoritesItem