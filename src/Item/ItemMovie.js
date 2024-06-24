import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FONT_SIZE } from '../../contrain/font_size'
import { COLOR } from '../../contrain/color'
import { useTheme } from '../Themes/MyThemes'
const ItemMovie = ({ user_id, item, navigation }) => {
    const { theme } = useTheme()
    const handlePress = () => {
        navigation.navigate('Details', { item: item, userID: user_id })
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{ width: 130, borderRadius: 8, height: 215, flexDirection: 'column', marginRight: 10 }}>
                <Image
                    resizeMode='cover'
                    style={{ width: '100%', height: '75%', backgroundColor: 'white', borderRadius: 8 }}
                    source={
                        {
                            uri: item.image
                        }
                    } >

                </Image>
                <View style={{ width: '100%', height: '25%', flexWrap: 'nowrap' }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: 500, color: theme === 'light' ? "#000000" : "#ffffff", padding: 5 }}>
                        {item.name.length > 25
                            ? item.name.substring(0, 25) + '...'
                            : item.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemMovie

const styles = StyleSheet.create({})