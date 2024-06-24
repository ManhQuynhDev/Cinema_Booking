import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, style, children }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: '40%',
        height: 48,
        borderRadius : 8,
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})