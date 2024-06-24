import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Toolbar from '../component/Toolbar'
import FavoritesItem from '../Item/FavoritesItem'
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '../Themes/MyThemes'
import { useFocusEffect } from '@react-navigation/native';
import { fetchFavorites } from '../redux/actions/favoriteActions';

const FavoriteScreen = () => {
    const listFavorite = useSelector(state => state.listFavorite.listFavorite);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFavorites())
    }, [dispatch])

    useFocusEffect(
        React.useCallback(() => {
            console.log('Screen is focused. Call data.');
            dispatch(fetchFavorites())
            return () => {
                console.log('Screen is unfocused. Clean up here if needed.');
            };
        }, [])
    );

    const listMemo = useMemo(() => {
        return listFavorite;
    })

    const { theme } = useTheme()
    const UI = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff'
    }
    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: UI.backgroundColor
        }}>
            <Toolbar title="Favorites" icon_left="left" />
            <View style={{ width: '95%', height: "100%" }}>
                <FlatList
                    data={listMemo}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <FavoritesItem item={item} />
                    }}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {

    }
})