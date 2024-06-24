import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import CustomButton from '../component/CustomButton'
import { FONT_SIZE } from '../../contrain/font_size'
import { useDispatch, useSelector } from "react-redux";
import { COLOR } from '../../contrain/color'
import Header from '../component/Header'
import Slider from '../component/Slider'
import { useTheme } from '../Themes/MyThemes'
import RenderFlatlist from '../component/RenderFlatlist'
import ItemMovie from '../Item/ItemMovie'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchMovies } from '../redux/actions/movieActions';
const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const listWatch = useSelector(state => state.listWatch.listWatch);
    const url = "http://10.0.2.2:3000/movies";
    const [userId, setUserID] = useState('')

    let page = 1;
    let limit = 3;

    const handleCallData = () => {
        setLoading(true)
        fetch(`${url}/page?page=${page}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }
    const loadMoreData = () => {
        page++;
        setLoading(true)
        fetch(`${url}/page?page=${page}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setData((prevData) => [...prevData, ...data]);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }
    const getUserId = async () => {
        setUserID(await AsyncStorage.getItem('user_id'));
    }
    useEffect(() => {
        handleCallData()
        getUserId()
    }, [])

    const list = useMemo(() => {
        return data;
    })
    const { theme, toggleTheme } = useTheme();
    const UI = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff'
    }
    return (
        <SafeAreaView style={{ width: "100%", height: '100%', backgroundColor: UI.backgroundColor }}>
            <ScrollView>
                <View style={{ flex: 1, width: '100%', height: 280, flexDirection: 'column', justifyContent: 'space-between' }}>
                    {/**Slide Show */}
                    <Slider />
                    <View style={{ flexDirection: 'row', width: '100%', padding: 10, justifyContent: 'space-evenly' }}>
                        <CustomButton onPress={toggleTheme} style={styles.button_watch}>
                            <Text style={styles.text_button}>Watch Trailer</Text>
                        </CustomButton>
                        <CustomButton onPress={
                            () => {
                                navigation.navigate("Details")
                            }
                        } style={styles.button_book}>
                            <Text style={styles.text_button}>Book Tickets</Text>
                        </CustomButton>
                    </View>
                </View>
                <View style={{ width: '100%', height: 'auto', padding: 10 }}>
                    <Header children={"Movies New"} />
                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            horizontal={true}
                            style={{ marginTop: 10 }}
                            data={data}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => <ItemMovie user_id={userId} item={item} navigation={navigation} />}
                            onEndReached={loadMoreData}
                            onEndReachedThreshold={0.1}
                        />
                        {
                            loading == true ? <ActivityIndicator size={'small'} color={'#fff'} /> : null}
                    </View>
                    <Header children={"Movies Hot"} />
                    <RenderFlatlist
                        style={{ marginTop: 10 }}
                        data={list}
                        isHorizontal={true}
                        renderItem={(item) => <ItemMovie user_id={userId} item={item} navigation={navigation} />}
                    />
                    <View style={{ width: '100%' }}>
                        {listWatch.length === 0 ? (
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../img/empty-box.png')} /></View>
                        ) : (
                            <View>
                                <Header children={"Movie has been watch"} />
                                <RenderFlatlist
                                    style={{ marginTop: 10 }}
                                    data={listWatch}
                                    isHorizontal={true}
                                    renderItem={(item) => <ItemMovie item={item} />}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text_button: {
        fontSize: FONT_SIZE.font_size_16,
        color: COLOR.white
    },
    button_watch: {
        borderColor: COLOR.blue,
        backgroundColor: COLOR.black
    },
    button_book: {
        borderColor: COLOR.blue,
        backgroundColor: COLOR.blue
    }
})