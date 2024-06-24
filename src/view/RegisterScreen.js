import { ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Keyboard, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, View, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR } from '../../contrain/color'
import { FONT_SIZE } from '../../contrain/font_size'
import CustomButton from '../component/CustomButton'
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import { addUserAPI } from '../redux/actions/userActions'

const RegisterScreen = ({ navigation }) => {
    const url = "http://10.0.2.2:3000/users"
    const [isAgree, setAgree] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [RepassWord, setRePassword] = useState('')
    const [isShow, setShow] = useState(false)
    const dispatch = useDispatch();
    const [isKeyBoarDidShow, setKeyBoarDidShow] = useState(false)
    const listUser = useSelector(state => state.listUser.listUser);
    const handleLogin = () => {
        if (email === '') {
            Alert.alert('Vui lòng nhập email')
            return
        }
        if (password === '') {
            Alert.alert('Vui lòng nhập email')
            return
        }
        if (RepassWord === '') {
            Alert.alert('Vui lòng nhập email')
            return
        }
        if (RepassWord !== password) {
            Alert.alert('Nhập lại password không chính xác')
            return
        }
        if (isAgree == false) {
            Alert.alert('Vui lòng chọn đồng ý các điều kiện của app')
            return
        }

        let found = false;

        let user = listUser.find(item => item.email == email);

        if (user) {
            found = true;
        } else {
            found = found;
        }

        if (found == false) {
            let newUser = {
                email: email,
                password: password
            }
            dispatch(addUserAPI(newUser)).then(result => {
                ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
                navigation.goBack();
            }).catch(err => {
                ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
                console.log(err)
            })
        } else {
            ToastAndroid.show("Eamil đã được sử dụng", ToastAndroid.SHORT);
        }
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     }),
        // }).then(res => res.json()).then(() => {
        //     Alert.alert("Đăng ký tài khoản thành công !");
        //     navigation.navigate('Login')
        // }).catch(err => console.log(err))
    }
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyBoarDidShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoarDidShow(false)
        })
    }, [])
    return (
        <KeyboardAvoidingView
            enabled={true}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ width: '100%', height: '100%' }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={{ width: '100%', height: '100%' }}>
                    <ImageBackground
                        resizeMode='cover'
                        resizeMethod='resize'
                        source={
                            require('../img/banner.png')
                        }
                        style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '100%', height: 500, justifyContent: 'space-evenly' }}>
                            {
                                isKeyBoarDidShow == false && <View style={{ width: '80%', marginLeft: 20 }}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="left" size={40} color={"#ffffff"} /></TouchableOpacity>
                                    <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_48, marginTop: 10, fontWeight: 'bold' }}>
                                        Create
                                        Account
                                    </Text>
                                </View>
                            }
                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-evenly', height: '80%' }}>
                                <View style={{ width: '90%', height: 74, justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '600', color: COLOR.white }}>Email</Text>
                                    <TextInput
                                        onChangeText={(text) => setEmail(text)}
                                        placeholder='e.g. example@mail.com'
                                        placeholderTextColor={COLOR.white}
                                        style={{ width: '100%', height: 45, color: COLOR.white, padding: 10, backgroundColor: '#3F1E88', borderWidth: 1, borderColor: '#892AEC' }} />
                                </View>
                                <View style={{ width: '90%', height: 74, justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '600', color: COLOR.white }}>Password</Text>
                                    <View>
                                        <TextInput
                                            onChangeText={(text) => setPassword(text)}
                                            placeholder='****...'
                                            secureTextEntry={isShow == false ? true : false}
                                            placeholderTextColor={COLOR.white}
                                            style={{ width: '100%', height: 45, color: COLOR.white, padding: 10, backgroundColor: '#3F1E88', borderWidth: 1, borderColor: '#892AEC' }} />
                                        <TouchableOpacity
                                            onPress={
                                                () => setShow(!isShow)
                                            }
                                            style={{ position: 'absolute', end: 15, bottom: 13 }}>
                                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16 }}>{isShow == false ? '👁️' : '🔒'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ width: '90%', height: 74, justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '600', color: COLOR.white }}>Confirm Password</Text>
                                    <View>
                                        <TextInput
                                            onChangeText={(text) => setRePassword(text)}
                                            placeholder='****...'
                                            secureTextEntry={isShow == false ? true : false}
                                            placeholderTextColor={COLOR.white}
                                            style={{ width: '100%', height: 45, color: COLOR.white, padding: 10, backgroundColor: '#3F1E88', borderWidth: 1, borderColor: '#892AEC' }} />
                                        <TouchableOpacity
                                            onPress={
                                                () => setShow(!isShow)
                                            }
                                            style={{ position: 'absolute', end: 15, bottom: 13 }}>
                                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16 }}>{isShow == false ? '👁️' : '🔒'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={
                                            () => setAgree(!isAgree)
                                        }
                                        style={{ width: 20, height: 20, marginRight: 15, borderRadius: 5, borderWidth: 1, borderColor: COLOR.white, justifyContent: 'center', alignItems: 'center' }}>
                                        {isAgree && <Text style={{ color: '#2ecc71', fontWeight: 'bold', fontSize: FONT_SIZE.font_size_12 }}>V</Text>}
                                    </TouchableOpacity>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                            I agree to the terms And privacy policy
                                        </Text>
                                    </View>
                                </View>
                                <CustomButton onPress={
                                    handleLogin
                                } style={{ width: '90%', backgroundColor: '#892AEC', borderColor: '#892AEC' }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, color: COLOR.white, fontWeight: 700 }}>Create Account</Text>
                                </CustomButton>
                            </View>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})