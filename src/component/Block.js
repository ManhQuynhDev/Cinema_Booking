import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';

const Block = ({ children, title, icon ,theme,style}) => {
    return (
        <View style={[style,styles.border]}>
            <View style={{ flexDirection: 'row' }}>
                <Text><Icon name={icon} size={25} color={theme === 'light' ? '#000000' : "#ffffff"} /></Text>
                <Text style={{ fontSize: FONT_SIZE.font_size_18, marginLeft: 10, fontWeight: 700, color: theme === 'light' ? '#000000' : "#ffffff" }}>{title}</Text>
            </View>
            {children}
        </View>
    )
}

export default Block

const styles = StyleSheet.create({
    border : {
        borderWidth : 1,
        borderColor : '#aeaeae',
        marginBottom : 6,
        borderRadius : 5,
        padding : 5
    }
})