import { FlatList, SafeAreaView, StyleSheet, ScrollView, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../Themes/MyThemes'
import Toolbar from '../component/Toolbar';
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import CustomButton from '../component/CustomButton';


const BookingScreen = ({ navigation, route }) => {
    const [cinemas, setCinemas] = useState([])
    const url = "http://10.0.2.2:3000/cinemas"
    const handleCallData = () => {
        fetch(url).then(res => res.json()).then((data) => {
            setCinemas(data)
        }).catch(err => console.log(err))
    }
    const [selectDate, setSelectDate] = useState(0)
    const { item } = route.params;
    const [date, setDate] = useState([
        {
            rank: "Mon",
            day: "8",
            month: "AUG"
        },
        {
            rank: "Tue",
            day: "9",
            month: "AUG"
        },
        {
            rank: "Wed",
            day: "10",
            month: "AUG"
        },
        {
            rank: "Fri",
            day: "11",
            month: "AUG"
        },
        {
            rank: "Sta",
            day: "12",
            month: "AUG"
        },
    ])
    useEffect(() => {
        handleCallData()
    }, [])
    const { theme } = useTheme();
    const UI = {
        backgroundColor: theme === 'light' ? "#ffffff" : "#000000",
        color: theme === 'light' ? "#000000" : "#ffffff",
        backgroundColorItem: theme === 'light' ? "#000000" : "#ffffff",
        colorItem: theme === 'light' ? "#ffffff" : "#000000",
    }
    const handleComeBack = () => {
        navigation.goBack()
    }
    const toggleDateSelection = (index) => {
        setSelectDate(index)
    };
    return (
        <SafeAreaView style={{ backgroundColor: UI.backgroundColor }}>
            <Toolbar onPress={handleComeBack} title={item.name} icon_left="left" />
            <View style={{ padding: 10, width: '100%', height: '100%' }}>
                <View style={{ width: '100%', height: 120, justifyContent: 'flex-end' }}>
                    <ScrollView horizontal={true}>
                        {date.map((item, index) => (
                            <TouchableOpacity
                                onPress={() => toggleDateSelection(index)}>
                                <View key={index} style={{ width: 70, borderColor: selectDate != index ? UI.backgroundColor : COLOR.blue, backgroundColor: UI.color, marginRight: 10, borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 8, height: 105 }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '500', color: UI.colorItem }}>{item.rank}</Text>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '500', color: UI.colorItem }}>{item.day}</Text>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: '500', color: UI.colorItem }}>{item.month}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={cinemas}
                        keyExtractor={(item) => item.rank}
                        renderItem={({ item }) => {
                            return <View style={{ width: '100%', height: 180, borderRadius: 8, backgroundColor: UI.backgroundColorItem, borderColor: UI.color, borderWidth: 1, padding: 10, marginBottom: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 700, fontSize: FONT_SIZE.font_size_18, color: UI.colorItem }}>
                                        {item.name} - {item.address.substring(0, 20) + '...'}
                                    </Text>
                                    <TouchableOpacity><Icon name="exclamationcircleo" size={20} color={UI.colorItem} /></TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                                        {date.map((item, index) => (
                                            <View key={index} style={{ width: 100, height: 50, backgroundColor: UI.backgroundColor, justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderColor: 'black', borderWidth: 1, marginBottom: 5, marginRight: 5 }}>
                                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600', color: UI.color }}>11.20 AM</Text>
                                                <Text style={{ fontSize: 14, fontWeight: '400', color: 'blue', color: COLOR.blue }}>2D</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        }}
                    />
                </View>
                <CustomButton
                    onPress={
                        () => {
                            navigation.navigate('SelectSeats', { item: item })
                        }
                    }
                    style={{ width: 60, height: 60, borderRadius: 30, bottom: 170, marginButton: 5, position: 'absolute', end: 35, backgroundColor: COLOR.blue, borderColor: COLOR.blue }}>
                    <Icon name="right" size={20} color={"#000000"} />
                </CustomButton>
            </View>
        </SafeAreaView>
    )
}

export default BookingScreen

const styles = StyleSheet.create({})