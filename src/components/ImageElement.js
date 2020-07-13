







import React, {useState} from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"

export const ImageElement = ({ data:{urls, user, id}}) => {
    
   

    return (
        <View style={styles.constainer}>
            <Image style={{flex: 1}}  source={{uri: urls.small}} />
            <Text style={styles.authorStyleName}>{user.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    constainer: {
        // backgroundColor: "red",
        width: 100,
        height: 100,
        margin: 10,
        borderWidth: 1,
        borderColor: "#575b61"
    },
    authorStyleName: {

    }
})
























