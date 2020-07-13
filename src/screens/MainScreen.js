import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"

import { getAllDataAction } from "../../src/store/actions/getDataActions"
import { useDispatch } from "react-redux"


export const MainScreen = ({ navigation }) => {

    const allDarafromState = useSelector(state => state.getData.allData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDataAction())
    }, [])

    const openFullPhoto = (id) => {
        navigation.navigate("SelectedPhoto", { id })
    }



    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>

            <FlatList
                data={allDarafromState}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => openFullPhoto(item.id)} style={styles.imageContainer}    >
                            <Image style={{ flex: 1 }} source={{ uri: item.urls.small }} />
                            <Text style={styles.authorStyleName}>{item.user.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        width: 100,
        height: 100,
        margin: 5,
        borderWidth: 1,
        borderColor: "#575b61"
    }
})