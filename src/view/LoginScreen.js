import { ImageBackground, SafeAreaView, Keyboard, TextInput, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useMemo } from 'react'
import { FONT_SIZE } from '../../contrain/font_size'
import { COLOR } from '../../contrain/color'
import CustomButton from '../component/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../redux/actions/userActions'
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const listUser = useSelector(state => state.listUser.listUser);
    const dispatch = useDispatch();
    const [isKeyBoarDidShow, setKeyBoarDidShow] = useState(false)
    useFocusEffect(
        React.useCallback(() => {
            console.log('Screen is focused. Do something here.');
            dispatch(fetchUsers())
            return () => {
                console.log('Screen is unfocused. Clean up here if needed.');
            };
        }, [])
    );

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const list = useMemo(() => {
        return listUser;
    })

    const [isShow, setShow] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyBoarDidShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoarDidShow(false)
        })
    }, [])

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleLogin = async () => {
        if (email === '') {
            ToastAndroid.show("Vui lòng nhập email", ToastAndroid.SHORT);
            return
        }
        if (!isValidEmail(email)) {
            ToastAndroid.show("Email không hợp lệ", ToastAndroid.SHORT);
            return;
        }
        if (password === '') {
            ToastAndroid.show("Vui lòng nhập password", ToastAndroid.SHORT);
            return
        }
        let account = list.find(item => item.email == email && item.password == password)
        if (account != null) {
            ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
            await AsyncStorage.setItem('user_id', account._id);
            navigation.navigate('Home')
        } else {
            ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
        }
    }
    return (
        <KeyboardAvoidingView>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={
                        require('../img/banner.png')
                    }
                    style={styles.container}>
                    {
                        isKeyBoarDidShow == false && <View style={{ flex: 2, justifyContent: 'space-around' }}>
                            <View />
                            <View style={{ width: '80%', marginLeft: 20 }}>
                                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_48, marginTop: 10, fontWeight: 'bold' }}>
                                    Login
                                </Text>
                                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_20, fontWeight: 700 }}>
                                    Welcome back to app
                                </Text>
                            </View>
                        </View>
                    }
                    <View style={{ height: 450, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ width: '90%', height: 74, justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '600', color: COLOR.white }}>Email</Text>
                            <TextInput
                                onChangeText={(text) => setEmail(text)}
                                placeholder='example@mail.com'
                                placeholderTextColor={COLOR.white}
                                style={{ width: '100%', height: 45, color: COLOR.white, padding: 10, backgroundColor: '#3F1E88', borderWidth: 1, borderColor: '#892AEC' }} />
                        </View>
                        <View style={{ width: '90%', height: 74, justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '600', color: COLOR.white }}>Password</Text>
                            <View>
                                <TextInput
                                    onChangeText={(text) => setPassword(text)}
                                    placeholder='example...'
                                    secureTextEntry={isShow == false ? true : false}
                                    placeholderTextColor={COLOR.white}
                                    style={{ width: '100%', height: 45, color: COLOR.white, padding: 10, backgroundColor: '#3F1E88', borderWidth: 1, borderColor: '#892AEC' }} /></View>
                            <TouchableOpacity
                                onPress={
                                    () => setShow(!isShow)
                                }
                                style={{ position: 'absolute', end: 15, bottom: 15 }}>
                                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16 }}>{isShow == false ? '👁️' : '🔒'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, height: 20, marginRight: 15, borderRadius: 5, borderWidth: 1, borderColor: COLOR.white }}>

                            </TouchableOpacity>
                            <View style={{ width: '70%' }}>
                                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                    Keep me signed in
                                </Text>
                            </View>
                        </View>
                        <CustomButton onPress={
                            handleLogin
                        } style={{ width: '90%', backgroundColor: '#892AEC', borderColor: '#892AEC' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, color: COLOR.white, fontWeight: 700 }}>Login</Text>
                        </CustomButton>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center' }}>
                            <View style={{ width: '30%', height: 2, backgroundColor: COLOR.white }}>

                            </View>
                            <Text style={{ fontWeight: 600, fontSize: FONT_SIZE.font_size_14, color: COLOR.white }}>
                                or sign in with
                            </Text>
                            <View style={{ width: '30%', height: 2, backgroundColor: COLOR.white }}>

                            </View>
                        </View>

                        <TouchableOpacity style={{ width: '90%', backgroundColor: COLOR.white, borderRadius: 8, borderColor: '#892AEC', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 45 }}>
                            <Text>
                                <Icon name="google" size={30} color="#000000" />
                            </Text>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, marginLeft: 10, fontWeight: 600, color: COLOR.black }}>Login with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={
                            () => navigation.navigate('Register')
                        }>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.white }}>
                                Create an Account
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>

                    </View>
                </ImageBackground>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})