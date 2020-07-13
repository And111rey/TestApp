import React from "react"
import { View, Text, StyleSheet, ActivityIndicator  } from "react-native"

export const Loader = () => {
    return (
        <View style={styles.indicatorStyles}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    indicatorStyles: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})