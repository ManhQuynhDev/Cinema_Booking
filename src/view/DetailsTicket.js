import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useTheme } from '../Themes/MyThemes';
import Toolbar from '../component/Toolbar';
import { FONT_SIZE } from '../../contrain/font_size';

const DetailsTicket = ({ navigation, route }) => {
    const { theme } = useTheme()
    let [isFavorite, setFavorite] = useState(false)
    const UI = {
        backgroundColor: theme === 'light' ? "#ffffff" : "#000000",
        color: theme === 'light' ? "#000000" : "#ffffff"
    }
    const handleComeBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={{ backgroundColor: UI.backgroundColor, width: '100%', height: '100%' }}>
            <Toolbar onPress={handleComeBack} title={"Ticket Details"} icon_left={"left"}/>
            <View style={{ flex: 1, marginEnd: 10, marginLeft: 10 }}>
                <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between', borderRadius: 13, alignItems: 'center', paddingBottom: 5 }}>
                    <View style={{ width: '100%', height: "55%", padding: 10 }}>
                        <Image
                            style={{ width: '100%', height: "100%", borderRadius: 10 }}
                            source={
                                {
                                    uri: "https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg"
                                }
                            }
                        />
                    </View>
                    <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 'bold' }}>
                        7 Viên Ngọc Rồng
                    </Text>
                    <View style={{ width: 36, height: 36, position: "absolute", left: -16, top: 404, borderRadius: 18, backgroundColor: 'black' }}>

                    </View>
                    <View style={{
                        width: '100%', height: 1, borderBottomWidth: 2,
                        borderBottomColor: 'black',
                        borderStyle: 'dashed',
                    }}>

                    </View>
                    <View style={{ width: 36, height: 36, position: "absolute", right: -16, top: 404, borderRadius: 18, backgroundColor: 'black' }}>

                    </View>
                    <View style={{ width: '100%', height: '26%', justifyContent: 'space-evenly', padding: 10 }}>
                        <View style={{ width: '100%', height: 45, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 500 }}>Cinema</Text>
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: 'black' }}>Time Cinema, CG Road</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 500 }}>Screen</Text>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: 'black' }}>Screen 2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: 45, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 500 }}>Date & Time</Text>
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: 'black' }}>09th Aug 2022 | 11:50 AM</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 500 }}>Seats</Text>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: 'black' }}>A1,A2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: 45, flexDirection: 'row' }}>
                            <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                                <View>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 500 }}>Order ID</Text>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: 'black' }}>56945812578</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 500 }}>Price</Text>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: 'black' }}>598 VND</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        source={
                            require('../img/QaCode.png')
                        }
                    />
                    <Text>
                        Scan This AT CINEMA
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailsTicket

const styles = StyleSheet.create({})