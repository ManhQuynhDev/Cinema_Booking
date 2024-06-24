import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
    return (
        <TextInput {...props} style={styles.txtInput}
            placeholderTextColor={props.placeholderTextColor || "bule"} />
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    txtInput: {
        padding: 10,
        margin: 10
    }
})