import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView, FlatList, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR } from '../../contrain/color'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { FONT_SIZE } from '../../contrain/font_size';
import { useTheme } from '../Themes/MyThemes';
import CustomButton from '../component/CustomButton';
import Header from '../component/Header';
import RenderFlatlist from '../component/RenderFlatlist';
import ItemMovie from '../Item/ItemMovie';
import Toolbar from '../component/Toolbar';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addFavoriteAPI, deleteFavoriteApi } from '../redux/actions/favoriteActions';
import { addMovieWatch } from '../redux/reducers/movieWatchReducers';

const MovieDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const userID = route.params.userID;
  const [dataActor, setDataActor] = useState([...item.actors])
  const [dataConfig, setDataConfig] = useState([])
  const [isFavorite, setFavorite] = useState(false)
  const dispatch = useDispatch();
  const listWatch = useSelector(state => state.listWatch.listWatch);
  const url = "http://10.0.2.2:3000/favorites"
  const url_Config = "http://10.0.2.2:3000/configs"
  const handlePress = () => {
    navigation.navigate('ReView', { item: item })
  }
  const handleCallConfig = () => {
    fetch(url_Config).then(res => res.json()).then((data) => {
      setDataConfig(data)
      console.log(data)
    }).catch(err => console.log(err))
  }
  const handleAddWatch = () => {
    let found = false;

    // Kiểm tra xem bộ phim đã tồn tại trong danh sách xem hay chưa
    for (let index = 0; index < listWatch.length; index++) {
      if (item._id === listWatch[index]._id) {
        found = true;
        break;
      }
    }

    if (!found) {
      dispatch(addMovieWatch(item));
    }
  };

  const handleIsFavorite = () => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const isMovieInFavorites = data.find(favorite => favorite.movie._id === item._id);
        if (isMovieInFavorites != undefined) {
          setFavorite(true)
        } else {
          setFavorite(false)
        }
      }).catch(err => console.log(err))
  }
  useEffect(() => {
    handleIsFavorite();
    handleCallConfig();
    handleAddWatch();
  }, [])
  const handleFavorite = () => {
    // Toggle the favorite status
    setFavorite(!isFavorite);
    // Assuming 'url' is the endpoint to add a favorite
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        // Check if the movie is already in the favorites list
        const isMovieInFavorites = data.some(favorite => favorite.user === userID && favorite.movie._id === item._id);

        // If the movie is not in the favorites list, add it
        if (!isMovieInFavorites) {
          const favorite = {
            status: true,
            user: userID,
            movie: item._id
          };
          dispatch(addFavoriteAPI(favorite)).then(result => {
            ToastAndroid.show("Đã thêm vào danh sách yêu thích", ToastAndroid.SHORT);
          }).catch(err => {
            ToastAndroid.show("Thêm thất bại !", ToastAndroid.SHORT);
            console.log(err)
          })
        } else {
          const movieFavorite = data.find(favorite => favorite.user === userID && favorite.movie._id === item._id);
          if (movieFavorite) {
            dispatch(deleteFavoriteApi(movieFavorite._id))
              .then((result) => {
                ToastAndroid.show("Đã xóa khỏi danh sách yêu thích", ToastAndroid.SHORT);
              })
              .catch((error) => {
                console.error('Error deleting todo:', error);
              });
          }
        }
      })
      .catch(err => console.log(err));
  }
  const [data, setData] = useState([
    {
      id: "1",
      name: "Thor: Love and Thunder",
      image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      id: "2",
      name: "7 viên ngọc rồng Online",
      image: "https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg"
    },
    {
      id: "3",
      name: "Thor: Love and Thunder",
      image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      id: "4",
      name: "7 viên ngọc rồng Online",
      image: "https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg"
    },
    {
      id: "5",
      name: "Thor: Love and Thunder",
      image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      id: "6",
      name: "7 viên ngọc rồng Online",
      image: "https://haycafe.vn/wp-content/uploads/2022/06/hinh-anh-7-vien-ngoc-rong-ngau.jpg"
    },
  ])
  const { theme } = useTheme()
  const UI = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
    color: theme === 'light' ? '#000000' : '#ffffff'
  }
  const handleComeBack = () => {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={{ width: '100%', height: 'auto', backgroundColor: UI.backgroundColor }}>
      <ScrollView>
        {/* <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="left" size={25} color={UI.color} /></TouchableOpacity>
          <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 600, color: UI.color }}>{item.name}</Text>
          <TouchableOpacity><Icon name="heart" size={20} color={UI.color} /></TouchableOpacity>
        </View> */}
        <Toolbar title={item.name.length > 20 ? `${item.name.substring(0, 20)}...` : item.name} onPress={handleComeBack} icon_left="left" isFavorite={isFavorite} onFavorite={handleFavorite} />
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Image
            style={{ width: '100%', height: 365, borderRadius: 10 }}
            source={
              {
                uri: item.image
              }
            } />
          <View style={{ justifyContent: 'space-evenly', width: '100%', height: 250 }}>
            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 'bold', color: UI.color }}>
              Synopsis
            </Text>
            <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: '400', color: UI.color }}>
              {item.describe}
            </Text>
            <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: '500', color: UI.color }}>
              {item.time} | Hài Tết | Vietnamese | Year : {item.year}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              {
                dataConfig.map((item, index) => {
                  return <TouchableOpacity style={{ width: 'auto', backgroundColor: COLOR.blue, borderRadius: 4, borderWidth: 1, borderColor: COLOR.blue, marginRight: 5 }}>
                    <Text style={{ color: COLOR.white, marginRight: 8, marginLeft: 8, fontWeight: 500 }}>
                      {item.configMovie}
                    </Text>
                  </TouchableOpacity>
                })
              }
            </View>
            <View style={{ flexDirection: 'row' }}>
              {
                dataConfig.map((item, index) => {
                  return <TouchableOpacity style={{ width: 'auto', borderRadius: 4, marginRight: 5, borderWidth: 1, borderColor: UI.color }}>
                    <Text style={{ color: UI.color, fontWeight: 500, marginRight: 8, marginLeft: 8 }}>
                      {item.language}
                    </Text>
                  </TouchableOpacity>
                })
              }
            </View>
          </View>

          <View>
            <Text style={{ color: UI.color, fontWeight: '800', fontSize: FONT_SIZE.font_size_20 }}>
              Reviews & Ratings
            </Text>
            <View style={{ width: '100%', marginTop: 5, height: 130, padding: 10, borderRadius: 8, backgroundColor: UI.color }}>
              <View style={{ width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                  resizeMethod='resize'
                  resizeMode='contain'
                  style={{ width: 100, height: 100, tintColor: theme === 'light' ? '#ffffff' : '#ff0000' }}
                  source={
                    {
                      uri: 'https://www.rottentomatoes.com/assets/pizza-pie/images/rtlogo.9b892cff3fd.png'
                    }
                  } />
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={
                        require('../img/romatoes.png')
                      }
                      style={{ width: 23, height: 27 }} />
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#ffffff' : '#000000' }}>
                      97%
                    </Text>
                  </View>
                  <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#ffffff' : '#000000' }}>
                    Tomatometer
                  </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={
                        require('../img/removebg.png')
                      }
                      style={{ width: 23, height: 27 }} />
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#ffffff' : '#000000' }}>
                      97%
                    </Text>
                  </View>
                  <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#ffffff' : '#000000' }}>
                    Audience Score
                  </Text>
                </View>
              </View>
              <View style={{ width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                  resizeMethod='resize'
                  resizeMode='contain'
                  style={{ width: 50, height: 50 }}
                  source={
                    require('../img/IMDb.png')
                  } />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>⭐</Text>
                  <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: theme === 'light' ? '#ffffff' : '#000000' }}>
                    8.6/10
                  </Text>
                </View>
                <CustomButton
                  onPress={handlePress}
                  style={{ backgroundColor: COLOR.blue, borderColor: COLOR.blue, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 500 }}>
                    More Details
                  </Text>
                  <Text>
                    <Icon name="right" size={15} color="#ffffff" />
                  </Text>
                </CustomButton>
              </View>
            </View>
          </View>

          <View style={{ width: '100%', height: 160, marginTop: 10 }}>
            <Header children={"Actor"} />
            <FlatList
              horizontal={true}
              data={dataActor}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <View style={{ width: 110, height: 130, justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <Image
                    style={{ width: 90, height: 90, borderRadius: 45 }}
                    source={
                      {
                        uri: item.avatar
                      }
                    }
                  />
                  <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: '600', color: UI.color }}>
                    {item.name}
                  </Text>
                </View>
              }} />
          </View>
          <View style={{ width: '100%', marginTop: 10 }}>
            {listWatch.length === 0 ? (
              <Image source={require('../img/empty-box.png')} />
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
          <CustomButton
            onPress={
              () => {
                navigation.navigate('Booking', { item: item })
              }
            }
            style={{ width: '100%', marginButton: 5, backgroundColor: COLOR.blue, borderColor: COLOR.blue }}>
            <Text style={{ color: COLOR.white, fontWeight: 700, fontSize: FONT_SIZE.font_size_16 }}>Book Tickets</Text>
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({})