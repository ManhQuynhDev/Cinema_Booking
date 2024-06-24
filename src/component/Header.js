import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';
import { useTheme } from '../Themes/MyThemes';

const Header = ({ children, onPress }) => {
  const { theme } = useTheme();
  return (
    <View style={{ width: '100%',marginBottom : 5, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 700, color: theme === 'light' ? '#000000' : "#ffffff" }}>{children}</Text>
      <TouchableOpacity onPress={onPress}><Icon name="right" size={25} color={theme === 'light' ? '#000000' : "#ffffff"} /></TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})