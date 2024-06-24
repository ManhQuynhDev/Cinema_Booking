import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Toolbar from '../component/Toolbar';
import { useTheme } from '../Themes/MyThemes';
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';
import CustomButton from '../component/CustomButton';

const SeatsScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const { theme } = useTheme()
    const [date, setDate] = useState([
        {
            data: '11.30 AM'
        },
        {
            data: '12.30 AM'
        },
        {
            data: '13.30 AM'
        },
        {
            data: '14.30 AM'
        },
        {
            data: '15.30 AM'
        },
    ])
    const [seatsA, setSeatsA] = useState(Array.from({ length: 25 }, (_, index) => ({
        id: index + 1,
        seatNumber: `A${index + 1}`,
        status: Math.random() < 0.5 ? 'available' : 'occupied'
    })));
    const [seatsB, setSeatsB] = useState(Array.from({ length: 25 }, (_, index) => ({
        id: index + 1,
        seatNumber: `B${index + 1}`,
        status: Math.random() < 0.5 ? 'available' : 'occupied'
    })));
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
            <Toolbar onPress={handleComeBack} title={item.name} icon_left={"left"} />
            <View style={{ paddingEnd: 10, paddingStart: 10, width: '100%', height: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: UI.color, fontSize: FONT_SIZE.font_size_16, fontWeight: 500 }}>
                        Time Cinema
                    </Text>
                    <Text style={{ color: UI.color, fontSize: FONT_SIZE.font_size_16, fontWeight: 500 }}>
                        Tue, 09 Aug
                    </Text>
                </View>
                <View style={{ width: '100%', height: 30, marginTop: 10 }}>
                    <FlatList data={date}
                        horizontal={true}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item }) => {
                            return <View style={{ borderRadius: 5, width: 92, marginRight: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: UI.backgroundColorItem, height: 25, borderWidth: 1, borderColor: UI.color }}>
                                <Text style={{ color: UI.colorItem, fontWeight: 500 }}>{item.data}</Text>
                            </View>
                        }}>
                    </FlatList>
                </View>
                <View style={{ width: '100%', height: 250, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '49%' }}>
                        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                            {seatsA.map(seat => (
                                <View key={seat.id} style={{ width: 30, marginBottom: 7, borderColor: 'white', backgroundColor: seat.status === "available" ? 'black' : 'gray', height: 26, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, marginRight: 5 }}>
                                    <Text style={{ color: 'white' }}>{seat.seatNumber}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{ width: '49%' }}>
                        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                            {seatsB.map(seat => (
                                <View key={seat.id} style={{ width: 30, marginBottom: 7, borderColor: 'white', height: 26, justifyContent: 'center', backgroundColor: seat.status === "available" ? 'black' : 'gray', alignItems: 'center', borderWidth: 1, borderRadius: 5, marginRight: 5 }}>
                                    <Text style={{ color: 'white' }}>{seat.seatNumber}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../img/Eye.png')} />
                    <Text style={{ color: UI.color, marginTop: 5 }}>All eyes this way please!</Text>
                </View>
                <View style={{ width: '100%', height: 140, justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-around' }}>
                            <View style={{ width: 25, height: 25, borderRadius: 6, borderWidth: 1, borderColor: 'gray' }}>

                            </View>
                            <Text style={{ color: UI.color, fontSize: FONT_SIZE.font_size_14 }}>
                                Available
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-around' }}>
                            <View style={{ width: 25, height: 25, borderRadius: 6, backgroundColor: 'gray' }}>

                            </View>
                            <Text style={{ color: UI.color, fontSize: FONT_SIZE.font_size_14 }}>
                                Booked
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-around' }}>
                            <View style={{ width: 25, height: 25, borderRadius: 6, backgroundColor: COLOR.blue }}>

                            </View>
                            <Text style={{ color: UI.color, fontSize: FONT_SIZE.font_size_14 }}>
                                Selected
                            </Text>
                        </View>
                    </View>
                    <CustomButton
                        onPress={
                            () => {
                                navigation.navigate('Payment', { item: item })
                            }
                        }
                        style={{ width: '100%', marginButton: 5, backgroundColor: COLOR.blue, borderColor: COLOR.blue }}>
                        <Text style={{ color: COLOR.white, fontWeight: 700, fontSize: FONT_SIZE.font_size_16 }}>Book Tickets</Text>
                    </CustomButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SeatsScreen

const styles = StyleSheet.create({})