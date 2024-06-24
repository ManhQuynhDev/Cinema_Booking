import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const RenderFlatlist = ({ data, renderItem, styles ,isHorizontal}) => {
  return (
    <FlatList
        horizontal={isHorizontal}
        style={styles}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => renderItem(item)}
    />
  )
}

export default RenderFlatlist

const styles = StyleSheet.create({})