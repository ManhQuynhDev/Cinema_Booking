import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/MaterialIcons';
import MovieDetailsScreen from './MovieDetailsScreen';
import ReViewDetailsScreen from './ReViewDetailsScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SettingScreen from './SettingScreen';
import FavoriteScreen from './FavoriteScreen';

const Tab = createBottomTabNavigator();

const MyTab = ({ navigation }) => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false
                }}>
                <Tab.Screen
                    name="Home"
                    options={
                        {
                            tabBarIcon: ({ focused }) =>
                                <Icon name="home" size={25} color={focused ? "#1E7E8B" : "black"} />
                        }
                    }>
                    {(props) => <HomeScreen {...props} navigation={navigation} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Favorite"
                    options={
                        {
                            tabBarIcon: ({ focused }) =>
                                <Icon2 name="favorite" size={25} color={focused ? "#1E7E8B" : "black"} />
                        }
                    }>
                    {(props) => <FavoriteScreen {...props} navigation={navigation} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Setting"
                    options={
                        {
                            tabBarIcon: ({ focused }) =>
                                <Icon name="setting" size={25} color={focused ? "#1E7E8B" : "black"} />
                        }
                    }>
                    {(props) => <SettingScreen {...props} navigation={navigation} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default MyTab;

const styles = StyleSheet.create({});