import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';
import { useTheme } from '../Themes/MyThemes';

const Toolbar = ({ title, onPress, icon_left, isFavorite, onFavorite }) => {
    const { theme } = useTheme()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}>
                <Text><Icon name={icon_left != null ? icon_left : <View />} size={20} color={theme === 'light' ? '#000000' : "#ffffff"} /></Text>
            </TouchableOpacity>
            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 600, color: theme === 'light' ? '#000000' : "#ffffff" }}>
                {title}
            </Text>
            <TouchableOpacity
                onPress={
                    onFavorite
                }>
                <Text>
                    <Icon
                        name={"heart"}
                        size={20}
                        color={isFavorite ? '#ff0000' : '#fff'}
                    />
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Toolbar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})