import { View, Text, SafeAreaView, Image, Pressable, Modal, TouchableOpacity, Switch, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useTheme } from '../Themes/MyThemes';
import Block from '../component/Block';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

const SettingScreen = ({ navigation }) => {
    const { theme, toggleTheme } = useTheme()
    const UI = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff'
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const handleToggle = () => {
        setIsEnabled(!isEnabled)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: UI.backgroundColor }}>
            <View style={{
                flex: 0.7,
                marginTop: 5,
                marginRight: 20,
                marginLeft: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={
                        () => {
                            navigation.goBack()
                        }
                    }
                >
                    <Text><Icon name="left" size={25} color={UI.color} /></Text>
                </TouchableOpacity>
                <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: UI.color }}>
                    Settings
                </Text>
                <View
                    style={{ width: 30, height: 30 }}
                ></View>
            </View>
            <View style={{
                flex: 9, marginRight: 10,
                marginLeft: 10,
            }}>
                {/**View */}
                <View style={{ width: '100%', height: '2%' }}>

                </View>
                <Block theme={theme} title="Information" icon="user" style={styles.component_information}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Name
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Lê Mạnh Quỳnh
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Class
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            MD18305
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            ID
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Ph32353
                        </Text>
                    </View>
                </Block>
                <Block theme={theme} title="Phone Information" icon="phone" style={styles.component_phone}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Type
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            {DeviceInfo.getBrand()}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Config
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            {DeviceInfo.getModel()}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Ram
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            {DeviceInfo.getSystemVersion()} GB
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            CPU
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            4GB
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Memory
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            4GB
                        </Text>
                    </View>
                </Block>
                <Block theme={theme} title="Other" icon="bars" style={styles.component_other}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Dark Mode
                        </Text>
                        <Switch
                            trackColor={{ false: 'gray', true: 'gray' }}
                            thumbColor={isEnabled ? '#000000' : '#000000'}
                            onValueChange={toggleTheme}>
                        </Switch>
                    </View>
                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.navigate('Forget')
                            }
                        }
                    >
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            () => {
                                Alert.alert('Thông báo', 'Bạn có chắc chắn muốn thoát ứng dụng không ?', [
                                    {
                                        text: 'Hủy',
                                        onPress: () => console.log('Cancel Pressed'),
                                        style: 'cancel',
                                    },
                                    { text: 'Thoát', onPress: () => navigation.navigate('Login') },
                                ]);
                            }
                        }
                    >
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: UI.color }}>
                            Language
                        </Text>
                        <TouchableOpacity style={{ width: '26%', marginRight: 10, height: 25, backgroundColor: '#999999', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#555555', borderRadius: 5 }}>
                            <Text style={{ color: COLOR.white }}>
                                English
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Block>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    component_information: {
        width: '100%',
        height: 160,
        justifyContent: 'space-around'
    },
    component_other: {
        width: '100%',
        height: 200,
        justifyContent: 'space-around'
    },
    component_phone: {
        width: '100%',
        height: 250,
        justifyContent: 'space-around'
    },
})

export default SettingScreen