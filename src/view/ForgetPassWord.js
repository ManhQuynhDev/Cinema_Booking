import { ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Keyboard, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR } from '../../contrain/color'
import { FONT_SIZE } from '../../contrain/font_size'
import CustomButton from '../component/CustomButton'
import Icon from 'react-native-vector-icons/AntDesign';

const ForgetPassWord = ({navigation}) => {
    const [isAgree, setAgree] = useState(false)
    const [email, setEmail] = useState('')
    const [isKeyBoarDidShow, setKeyBoarDidShow] = useState(false)
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
                                        Forget
                                        PassWord
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
                                            I'm not a robot
                                        </Text>
                                    </View>
                                </View>
                                <CustomButton onPress={
                                    () => {

                                    }
                                } style={{ width: '90%', backgroundColor: '#892AEC', borderColor: '#892AEC' }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, color: COLOR.white, fontWeight: 700 }}>Forget</Text>
                                </CustomButton>
                            </View>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default ForgetPassWord

const styles = StyleSheet.create({})