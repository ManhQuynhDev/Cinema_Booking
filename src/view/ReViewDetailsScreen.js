import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, FlatList, ScrollView, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { useTheme } from '../Themes/MyThemes';
import { FONT_SIZE } from '../../contrain/font_size';
import { COLOR } from '../../contrain/color';
import CustomButton from '../component/CustomButton';
import Header from '../component/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReViewDetailsScreen = ({ navigation, route }) => {
    const [data, setData] = useState([])
    const currentDate = new Date();
    const url = "http://10.0.2.2:3000/evaluations"
    const { item } = route.params;
    const [userId, setUserID] = useState('')
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('')
    const handleRatingChange = (ratingValue) => {
        setRating(ratingValue);
    };
    const handleCallData = () => {
        fetch(url).then(res => res.json()).then((data) => setData(data)).catch(err => console.log(err))
    }
    const getUserId = async () => {
        setUserID(await AsyncStorage.getItem('user_id'))
    }
    useEffect(() => {
        handleCallData()
        getUserId()
    }, [])
    const { theme } = useTheme()
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: theme === 'light' ? '#ffffff' : "#000000", paddingLeft: 10, paddingRight: 10 }}>
            <ScrollView>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="left" size={25} color={theme === 'light' ? '#000000' : "#ffffff"} /></TouchableOpacity>
                    <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 600, color: theme === 'light' ? '#000000' : "#ffffff" }}>Reviews & Ratings</Text>
                    <TouchableOpacity><Icon name="heart" size={20} color={theme === 'light' ? '#000000' : "#ffffff"} /></TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 375, justifyContent: 'space-around' }}>
                    <ImageBackground
                        style={{ width: '100%', height: 200, borderRadius: 8, overflow: 'hidden', justifyContent: 'space-between' }}
                        source={
                            {
                                uri: item.image
                            }
                        }
                    >
                        <View />
                        <Text style={{ color: COLOR.white, margin: 10, fontSize: FONT_SIZE.font_size_18, fontWeight: 700 }}>{item.name}</Text>
                    </ImageBackground>
                    <CustomButton style={{ width: '100%', backgroundColor: theme === 'light' ? "#000000" : "#ffffff", borderColor: theme === 'light' ? "#000000" : "#ffffff" }}>
                        <Image
                            resizeMethod='resize'
                            resizeMode='contain'
                            style={{ width: 80, height: 80, tintColor: theme === 'light' ? '#ffffff' : '#ff0000' }}
                            source={
                                {
                                    uri: 'https://www.rottentomatoes.com/assets/pizza-pie/images/rtlogo.9b892cff3fd.png'
                                }
                            } />
                    </CustomButton>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: theme === 'light' ? "#000000" : "#ffffff" }}>
                            Critics Ratings
                        </Text>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={
                                        require('../img/romatoes.png')
                                    }
                                    style={{ width: 23, height: 27 }} />
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#000000' : '#ffffff' }}>
                                    97%
                                </Text>
                            </View>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#000000' : '#ffffff' }}>
                                Tomatometer
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: theme === 'light' ? "#000000" : "#ffffff" }}>
                            Audience Ratings
                        </Text>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={
                                        require('../img/removebg.png')
                                    }
                                    style={{ width: 23, height: 27 }} />
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#000000' : '#ffffff' }}>
                                    97%
                                </Text>
                            </View>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#000000' : '#ffffff' }}>
                                Audience Score
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 3, backgroundColor: theme === 'light' ? '#000000' : '#fffffff' }}>

                    </View>
                </View>
                <View style={{ width: '100%', height: 260, justifyContent: 'space-evenly' }}>
                    <Header children={"Create Reviews"} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#000000' : '#ffffff' }}>Ratings</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Text
                                    key={star}
                                    style={{ fontSize: 30, color: star <= rating ? 'gold' : 'gray' }}
                                    onPress={() => handleRatingChange(star)}>
                                    ★
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#000000' : '#ffffff' }}>Comment</Text>
                        <TextInput
                            onChangeText={(text) => setComment(text)}
                            style={{ borderWidth: 0.7, borderRadius: 10, padding: 10, color: theme === 'light' ? '#000000' : '#ffffff', marginTop: 5, borderColor: theme === 'light' ? '#000000' : '#ffffff' }}
                            multiline
                            value={comment}
                            numberOfLines={4}
                            placeholder="Enter your comment about movie"
                            placeholderTextColor={theme === 'light' ? '#000000' : '#ffffff'}
                        />
                    </View>
                    <CustomButton
                        onPress={
                            () => {
                                if (rating == 0) {
                                    Alert.alert('Vui lòng chọn độ hài lòng')
                                    return false
                                }

                                if (comment === '') {
                                    Alert.alert('Vui lòng nhập nội dung đánh giá')
                                    return false
                                }

                                const year = currentDate.getFullYear();
                                const month = currentDate.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0, nên cộng thêm 1
                                const day = currentDate.getDate();

                                let evaluation = {
                                    ratings: rating,
                                    comment: comment,
                                    movie: item._id,
                                    user: userId,
                                    date: `${day}/${month}/${year}`
                                }
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(evaluation),
                                }).then(res => res.json()).then(() => {
                                    Alert.alert('Cảm ơn bạn đã để lại bình luận 🥰')
                                    setComment("")
                                    setRating(0)
                                    handleCallData()
                                }).catch(err => console.log(err));
                            }
                        }
                        style={{ width: '100%', marginButton: 5, backgroundColor: COLOR.blue, borderColor: COLOR.blue }}>
                        <Text style={{ color: COLOR.white, fontWeight: 700, fontSize: FONT_SIZE.font_size_16 }}>Send Comment</Text>
                    </CustomButton>
                </View>
                <View>
                    <Header children={"User Reviews"} />
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return <View style={{ width: '100%', height: 'auto', justifyContent: 'space-around', marginBottom: 10 }}>
                                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        resizeMethod='resize'
                                        resizeMode='cover'
                                        source={
                                            {
                                                uri: 'https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg'
                                            }
                                        }
                                        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 5 }} />
                                    <View style={{ flex: 1 }}>
                                        <View >
                                            <Text style={{ color: theme == 'light' ? '#000000' : '#ffffff', fontWeight: 600, fontSize: FONT_SIZE.font_size_18 }}>{item.user.email}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: theme == 'light' ? '#000000' : '#aeaeae', fontWeight: 500, fontSize: FONT_SIZE.font_size_14 }}>{item.date}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: theme == 'light' ? '#000000' : '#ffffff', fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>⭐ {item.ratings}/5</Text>
                                </View>
                                <View>
                                    <Text style={{ color: theme == 'light' ? '#000000' : '#ffffff',fontWeight: 500, fontSize: FONT_SIZE.font_size_16,marginTop: 5}}>
                                        {item.comment}
                                    </Text>
                                </View>
                            </View>
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReViewDetailsScreen

const styles = StyleSheet.create({})