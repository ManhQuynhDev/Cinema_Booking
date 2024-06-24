import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/MaterialIcons';
import Icon4 from 'react-native-vector-icons/dist/FontAwesome';
import { useTheme } from '../Themes/MyThemes';
import Toolbar from '../component/Toolbar';
import { COLOR } from '../../contrain/color';
import { FONT_SIZE } from '../../contrain/font_size';
import CustomButton from '../component/CustomButton';
const PaymentScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const { theme } = useTheme()
    const UI = {
        backgroundColor: theme === 'light' ? "#ffffff" : "#000000",
        color: theme === 'light' ? "#000000" : "#ffffff",
        backgroundColorItem: theme === 'light' ? "#000000" : "#ffffff",
        colorItem: theme === 'light' ? "#ffffff" : "#000000",
    }
    const handleComeBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={{ backgroundColor: UI.backgroundColor }}>
            <Toolbar onPress={handleComeBack} title={"Payment"} icon_left={"left"} />
            <View style={{ width: '100%', height: 600, justifyContent: 'space-evenly', paddingEnd: 10, paddingStart: 10 }}>
                <View style={{ width: '100%', borderRadius: 8, height: 220, backgroundColor: UI.backgroundColorItem, padding: 10, flexDirection: 'row' }}>
                    <View style={{ width: "60%" }}>
                        <Text style={{ fontSize: 20, fontWeight: 700, color: UI.colorItem }}>
                            Top Gun: Maverick
                        </Text>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <TouchableOpacity style={{ width: 'auto', borderRadius: 4, marginRight: 5, backgroundColor: COLOR.blue }}>
                                <Text style={{ color: COLOR.black, fontWeight: 500, marginRight: 8, marginLeft: 8 }}>
                                    (A)
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 'auto', borderRadius: 4, marginRight: 5, backgroundColor: COLOR.blue }}>
                                <Text style={{ color: COLOR.black, fontWeight: 500, marginRight: 8, marginLeft: 8 }}>
                                    vietnamese
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 'auto', borderRadius: 4, marginRight: 5, backgroundColor: COLOR.blue }}>
                                <Text style={{ color: COLOR.black, fontWeight: 500, marginRight: 8, marginLeft: 8 }}>
                                    3D
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "100%", height: '50%', justifyContent: 'space-evenly', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>
                                    <Icon2 name="location" size={20} color={UI.colorItem} />
                                </Text>
                                <Text style={{ fontWeight: 500, marginLeft: 5, fontSize: FONT_SIZE.font_size_14, color: UI.colorItem }}>
                                    Time Cinema, CG Road
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text>
                                    <Icon name="calendar" size={20} color={UI.colorItem} />
                                </Text>
                                <Text style={{ fontWeight: 500, marginLeft: 5, fontSize: FONT_SIZE.font_size_14, color: UI.colorItem }}>
                                    Wed, 09th Aug, 11:50 AM
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text>
                                    <Icon3 name="event-seat" size={20} color={UI.colorItem} />
                                </Text>
                                <Text style={{ fontWeight: 500, marginLeft: 5, fontSize: FONT_SIZE.font_size_14, color: UI.colorItem }}>
                                    2 Seats : Gold 300 - A1, A2
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: "40%", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ width: '100%', height: "100%", borderRadius: 10 }}
                            source={
                                {
                                    uri: "https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg"
                                }
                            }
                        >
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', justifyContent: 'space-evenly', marginTop: 10, borderRadius: 8, height: 150, backgroundColor: UI.backgroundColorItem, padding: 10, }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 700, color: UI.colorItem }}>
                        Price Details
                    </Text>
                    <View style={{ width: "100%", height: 1.5, backgroundColor: COLOR.gray }} />
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 400, color: UI.colorItem }}>
                            Price Details
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 400, color: UI.colorItem }}>
                            563 VND
                        </Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 400, color: UI.colorItem }}>
                            Fees
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 400, color: UI.colorItem }}>
                            563 VND
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 1.5, backgroundColor: COLOR.gray }} />

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 600, color: UI.colorItem }}>
                            Total price
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 400, color: UI.colorItem }}>
                            563 VND
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 210, justifyContent: 'space-evenly' }}>
                    <Text style={{ color: 'white', fontSize: FONT_SIZE.font_size_20, fontWeight: '700', color: UI.color }}>
                        Select Payment Modes
                    </Text>
                    <View style={{ width: '100%', borderRadius: 8, height: 50, flexDirection: 'column', backgroundColor: UI.backgroundColorItem, padding: 10 }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, marginRight: 10, height: 20, borderColor: COLOR.gray, borderWidth: 2, borderRadius: 10 }}>

                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: '600', color: UI.colorItem }}>Add Credit/Debit Card</Text>
                            </View>
                            <Text>
                                <Icon name="creditcard" size={25} color={UI.colorItem} />
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', borderRadius: 8, height: 50, flexDirection: 'column', backgroundColor: UI.backgroundColorItem, padding: 10 }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, marginRight: 10, height: 20, borderColor: COLOR.gray, borderWidth: 2, borderRadius: 10 }}>

                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: '600', color: UI.colorItem }}>UPI</Text>
                            </View>
                            <Text>
                                <Icon name="dingding" size={25} color={UI.colorItem} />
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', borderRadius: 8, height: 50, flexDirection: 'column', backgroundColor: UI.backgroundColorItem, padding: 10 }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, marginRight: 10, height: 20, borderWidth: 2, borderColor: COLOR.gray, borderRadius: 10 }}>

                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: '600', color: UI.colorItem }}>Net Banking</Text>
                            </View>
                            <Text>
                                <Icon4 name="bank" size={25} color={UI.colorItem} />
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 100, padding: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                <CustomButton
                    onPress={
                        () => {
                            navigation.navigate('DetailsTicket', { item: item })
                        }
                    }
                    style={{ width: '100%', marginButton: 5, backgroundColor: COLOR.blue, borderColor: COLOR.blue }}>
                    <Text style={{ color: COLOR.white, fontWeight: 700, fontSize: FONT_SIZE.font_size_16 }}>Book Tickets</Text>
                </CustomButton>
            </View>
        </SafeAreaView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})